if (!DEFINEiniciarRastreio) {
    var loadScriptrastreio = function(k, c) {
            var d = document.createElement("script");
            d.type = "text/javascript";
            d.readyState ? d.onreadystatechange = function() {
                if ("loaded" == d.readyState || "complete" == d.readyState) d.onreadystatechange = null, c()
            } : d.onload = function() {
                c()
            };
            d.src = k;
            document.getElementsByTagName("head")[0].appendChild(d)
        },
        alteraTab = function() {
            $(".mensagem-alerta").html("");
            $("#tab2-2").prop("checked", !0);
            var k = document.getElementById("order_n");
            $("#formSearch #order_n").val(k.value)
        },
        iniciarRastreio = function() {
            function k(b) {
                for (var a = document.getElementById("productDiv"); a.firstChild;) a.removeChild(a.firstChild);
                b = "<h2>" + b + "</h2><br>";
                document.getElementById("msgDiv").innerHTML = b
            }
            var c = new URL(window.location.href),
                d = c.pathname;
            d = d.split("/");
            d = d[d.length - 1];
            if ("rastreio" === d) {
                for (var m = c.protocol + "//" + c.host, g = document.getElementById("rastreioDiv"); g.firstChild;) g.removeChild(g.firstChild);
                d = document.createElement("div");
                d.id = "mainDiv";
                g.appendChild(d);
                g = document.getElementsByTagName("head")[0];
                var f = document.createElement("link");
                f.id = "rastreioCss";
                f.rel = "stylesheet";
                f.type = "text/css";
                f.href = 'https://rastreio.empreender.com.br/css/rastreio.css';
                f.media = "all";
                g.appendChild(f);
                f = document.createElement("script");
                f.src = "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
                f.type = "text/javascript";
                g.appendChild(f);
                f = document.createElement("script");
                f.src = 'https://rastreio.empreender.com.br/js/rastreio.js';
                g.appendChild(f);
                d.innerHTML = '<div id="msgDiv" style="text-align:center"></div><div id="productDiv"></div><h4 class="rastrear-novo-pedido" style="text-align:center;display:none;margin-top:0"><a class="j-rastrear-pedido" href="#">Rastrear Novo Pedido</a></h4><br style="clear:both" /><div class="box-rastreio" style="display:none"><div style="text-align:center"><div style="display:flex;flex-wrap:wrap;justify-content:center"><div class="tabs"><div class="tab-1"><label for="tab2-2">E-mail & Pedido</label><input class="tab-input" id="tab2-2" name="tabs-two" type="radio" checked="checked"><div><form style="border:1px solid;padding:20px;margin:20px" method="get" action="" id="formSearch" onsubmit="return checkform()"><p>Insira o seu e-mail e o n\u00famero do seu pedido e clique no bot\u00e3o "Localizar"</p><div><input id="order_email" type="text" name="email" placeholder="Digite Seu E-mail" /></div><div style="margin-top:10px"><input type="text" id="order_n" name="order" placeholder="N\u00famero do Pedido" /></div><div style="margin-top:10px"><button class="btn" type="submit">Localizar</button></div><p style="color:red" class="mensagem-alerta"></p></form></div></div></div></div></div></div><div id="collectionDiv" style="text-align:center;margin-top:20px"></div>';
                $(".j-rastrear-pedido").click(function() {
                    $(".box-rastreio").hasClass("active") || ($(".box-rastreio").fadeIn("slow"), $(".box-rastreio").addClass("active"));
                    return !1
                });
                $(".tab-input").click(function() {
                    $(".mensagem-alerta").html("")
                });
                $.ajax({
                    type: "GET",
                    url: "https://rastreio.empreender.com.br/getCollection/cartx?shop=comprasonline.oncartx.io",
                    success: function(b, a, d) {
                        var c = "";
                        if (b && b.products && 0 < b.products.length) {
                            c += '<div><h3 class="more-products">Aproveite e veja tamb\u00e9m</h3>';
                            for (a = 0; a < b.products.length; a++) {
                                d = b.products[a];
                                c += '<div class="d-inline-block" style="margin-top:20px;margin-right:20px;width:200px;vertical-align:top;">';
                                c += '<a href="' + d.produto_link + '">';
                                c += '<div style="width:200px;height:200px;vertical-align:center;">';
                                c += '<img style="max-width:100%;max-height:100%;" src="' + d.img + '" />';
                                c += "</div>";
                                var f = d.title;
                                var g = 40 < f.length ? "..." : "";
                                f = f.substring(0, 40) + g;
                                c += "<div><span>" + f + "</span></div>";
                                c += "<div><span><b>R$ " + d.price.replace(".", ",") + "</b></span></div>";
                                c += "</a>";
                                c += "</div>"
                            }
                            c += "</div>"
                        }
                        document.getElementById("collectionDiv").innerHTML =
                            c;
                        $(".slick-tracker").hasClass("active") && $(".slick-tracker").slick({
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2E3
                        });
                        0 > window.location.href.indexOf("?") && !$(".box-rastreio").hasClass("active") && ($(".box-rastreio").fadeIn("slow"), $(".box-rastreio").addClass("active"))
                    },
                    error: function(b, a, c) {
                        document.querySelector(".rastrear-novo-pedido").style.display = "block";
                        k("")
                    }
                });
                c = new URLSearchParams(c.search);
                g = d = "";
                "" !== c.get("email") && "" !== c.get("order") && null !== c.get("email") && null !== c.get("order") &&
                    (d = c.get("email"), g = c.get("order"), document.getElementById("productDiv").innerHTML = '<div style="text-align: center;"><br><br><div class="load-wrapper"><div class="loop-wrapper"><div class="mountain"></div><div class="hill"></div><div class="tree"></div><div class="tree"></div><div class="tree"></div><div class="rock"></div><div class="truck"></div><div class="wheels"></div></div><span class="loading" style="display:none;">Carregando...</span></div></div>', $.ajax({
                        type: "GET",
                        url: "https://rastreio.empreender.com.br/rastreioQuery/cartx?shop=comprasonline.oncartx.io&email=" +
                            d + "&order=" + g,
                        success: function(b, a, c) {
                            if (null == b.error) {
                                a = "";
                                console.log("data.fulfillments", b.fulfillments);
                                if (null == b.fulfillment_status) k(b.fulfillments[0].events.descricao);
                                else if (b.fulfillments) {
                                    a = '<div><div style="border: 1px solid #ccc; width: 80%; margin: 40px auto;border-radius:4px;"><div class="product-header text-muted-descricao">';
                                    b.fulfillments[0] && b.fulfillments[0].products && b.fulfillments[0].products[0] && (a = a + '<a class="order-title" href="#"><strong>Pedido</strong>: <span>' + (b.fulfillments[0].products[0].order_number +
                                        (b.first_name ? " - " + b.first_name : "") + "</span></a>"), a += '<span class="icon-order">\u25be</span>');
                                    a += '<span class="order-status"><strong>Ver Status Abaixo</strong></span></div><div class="corpo-pedido" style="padding: 25px;">';
                                    c = "";
                                    for (var d = b.total_line_items_price, f = b.total_price, g = b.mostrar_codigo_correio, h = 0; h < b.fulfillments.length; h++) {
                                        a += '<div class="box-main-product">';
                                        a = 0 == h ? a + '<div class="main-product">' : a + '<div class="main-product" style="margin-top: 20px;">';
                                        for (var l = 0; l < b.fulfillments[h].products.length; l++) {
                                            var e =
                                                b.fulfillments[h].products[l];
                                            "" != e.informacoes_conteudo && "top" == e.posicao_conteudo && (a += '<div class="informacoes-conteudo"><p>' + e.informacoes_conteudo + "</p></div>");
                                            "" != e.informacoes_conteudo && "bottom" == e.posicao_conteudo && (c = '<div class="informacoes-conteudo"><p>' + e.informacoes_conteudo + "</p></div>");
                                            a += '<div class="main-product-image">';
                                            a += '<a href="' + m + "/products/" + e.handle + '">';
                                            a += '<img style="max-width: 100%;" src="' + e.img + '" />';
                                            a += "</a>";
                                            a += '<div class="main-product-description">';
                                            a += '<a href="' +
                                                m + "/products/" + e.handle + '">';
                                            a += "<p>" + e.title + "</p>";
                                            a += "</a>";
                                            a += "<p><strong>" + e.qtd + (1 == e.qtd ? " unidade" : " unidades") + " - R$ " + e.price.replace(".", ",") + "</strong></p>";
                                            null != e.variant_title && (a += "<p>" + e.variant_title + "</p>");
                                            "" != e.correios_number && 1 == g && (a += "<p><strong>C\u00f3digo dos Correios: </strong>" + e.correios_number + "</p>");
                                            a += "</div>";
                                            a += "</div>"
                                        }
                                        a += "</div>";
                                        a += '<div class="timeline timeline-border">';
                                        if ("string" === typeof b.fulfillments[h].error) a += '<div class="timeline-list timeline-border timeline-success">',
                                            a += '<div class="timeline-info">', a += '<div class="d-inline-block">' + b.fulfillments[h].error + "</div>", a += '<small class="timeline-date text-muted"></small></div>', a += "</div>";
                                        else if (b.fulfillments[h].events.constructor === Array)
                                            for (l = b.fulfillments[h].events.length - 1; 0 <= l; l--) e = b.fulfillments[h].events[l], a += '<div class="timeline-list timeline-border timeline-success">', a += '<div class="timeline-info">', a += '<div class="text-muted-descricao">' + e.descricao + "</div>", a += '<small class="text-muted">' + e.data_hora +
                                                "</small></div>", a += "</div>";
                                        else e = b.fulfillments[h].events, a += '<div class="timeline-list timeline-border timeline-success">', a += '<div class="timeline-info">', a += '<div class="text-muted-descricao">' + e.descricao + "</div>", a += '<small class="text-muted">' + e.data_hora + "</small></div>", a += "</div>";
                                        a += "</div></div>"
                                    }
                                    b = "";
                                    d != f && null != d && (b = "<strike> R$ " + (d != f ? d.replace(".", ",") : "") + "</strike> - ");
                                    a += '<p class="value-total">Valor total: ' + b + ' <span style="font-weight: bold;">R$ ' + f.replace(".", ",") + "</span></p>";
                                    c && (a += c);
                                    a += "</div></div>"
                                }
                                for (b = document.getElementById("productDiv"); b.firstChild;) b.removeChild(b.firstChild);
                                b.innerHTML = a;
                                document.querySelector(".rastrear-novo-pedido").style.display = "block"
                            } else document.querySelector(".rastrear-novo-pedido").style.display = "block", k(b.error)
                        },
                        error: function(b, a, c) {
                            document.querySelector(".rastrear-novo-pedido").style.display = "block";
                            k("Ocorreu um erro ao carregar o seu pedido. Por favor, tente novamente dentro de 15 minutos.")
                        }
                    }));
                ("" === c.get("email") && "" !==
                    c.get("order") || "" !== c.get("email") && "" === c.get("order")) && k("Os campos e-mail e pedido devem ser preenchidos.");
                window.checkform = function() {
                    $("#formSearchNumber").find("#order_n").val();
                    var b = $("#formSearch").find("#order_email").val(),
                        a = $("#formSearch").find("#order_n").val();
                    var c = document.getElementById("order_n");
                    c.value = c.value.replace(/[^A-Za-z0-9\- ]/, "");
                    return "" == c.value && $("#tab2-1").is(":checked") ? ($(".mensagem-alerta").html("<br style='font-weight:bold;'>Por favor, digite o c\u00f3digo de rastreamento."),
                        !1) : !c.value.match(/^([A-Z]{2}[0-9]{14}|[A-Za-z]{2}[0-9]{9}[A-Za-z]{2}|^[A-Z]{1,5}[0-9]{1,9})$/) && $("#tab2-1").is(":checked") ? ($(".mensagem-alerta").html("<br>O c\u00f3digo de rastreamento informado n\u00e3o \u00e9 v\u00e1lido. <br><a style='cursor: pointer;font-weight:bold;' onclick='alteraTab();'>Clique aqui</a> para pesquisar com o n\u00famero do pedido e seu e-mail."), !1) : "" == b && $("#tab2-2").is(":checked") ? ($(".mensagem-alerta").html("<br style='font-weight:bold;'>Por favor, digite seu email."),
                        !1) : !b.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && $("#tab2-2").is(":checked") ? ($(".mensagem-alerta").html("<br style='font-weight:bold;'>Por favor, digite um email v\u00e1lido."), !1) : "" == a && $("#tab2-2").is(":checked") ? ($(".mensagem-alerta").html("<br style='font-weight:bold;'>Por favor, digite o n\u00famero do seu pedido."), !1) : !0
                }
            }
        },
        DEFINEiniciarRastreio = !0;
    "undefined" == typeof jQuery ||
        "undefined" == typeof jQuery.ajax ? loadScriptrastreio("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", iniciarRastreio) : iniciarRastreio()
};