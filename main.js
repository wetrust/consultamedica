var aplication;
var keynum, lines = 1, timeLoad, timeCount;

function limitLines(obj, e) {
        // IE
        if(window.event) {
          keynum = e.keyCode;
        // Netscape/Firefox/Opera
        } else if(e.which) {
          keynum = e.which;
        }

        if(keynum == 13) {
          if(lines == obj.rows) {
            return false;
          }else{
            lines++;
          }
        }
      }

var errCallback = function(){
	alert("Oh noes! There haz bin a datamabase error!");
};
var savePacientes = function(idPaciente, nombre, apellido, motivo, ecografia, lugarControl, ciudad, telefono, email, fNac, fum, successCallback){
	aplication.db.transaction(function(transaction){
		transaction.executeSql(("insert into Users (user_id, user_name, user_lastname, careReason, sonographer, controlPlace, city, phone, email, birthdate, fum) values (?,?,?,?,?,?,?,?,?,?,?);"), 
		[idPaciente, nombre, apellido, motivo, ecografia, lugarControl, ciudad, telefono, email, fNac, fum], function(transaction, results){successCallback(results);}, errCallback);
	});
};

var loadPacientes = function(successCallback){
	aplication.db.transaction(
		function(transaction){
			transaction.executeSql('SELECT * FROM Users', [],function(transaction, results){successCallback(results);}, errCallback);
	});
};

var loadPaciente = function(idPaciente, successCallback){
	aplication.db.transaction(
		function(transaction){
			transaction.executeSql(("SELECT * FROM Users WHERE id=?"), [idPaciente],function(transaction, results){successCallback(results);}, errCallback);
	});
};

var listPacientes = function(results){
	var contenedor = $("#tablaPacientes");
	contenedor.empty();
	var html = '<table class="table table-bordered table-hover"><thead class="bg-primary text-white"><th>ID</th><th>Nombre</th><th>Apellido</th><th>Motivo</th><th>FUM </th><th>Ciudad </th></thead><tbody>';
	if (results.rows.length==0){
		html = "<div class='alert alert-primary' role='alert'>No hay pacientes su base de datos personal.</div>";
	} else {
		$.each(results.rows, function(rowIndex){
			var row = results.rows.item(rowIndex);
			html += '<tr onclick="aplication.editarPaciente('+ row.id +')"><td scope="row">';
			html += row.user_id + '</td><td>' + row.user_name + '</td><td>' + row.user_lastname + '</td><td>' + row.careReason + '</td><td>' + row.fum + '</td><td>' + row.city + '</td><td><button type="button" class="btn btn-primary"  onclick="aplication.usarPaciente(' + row.id +')">exámen</button></td></tr>';
		});
		html += '</tbody></table>';
	}
	contenedor.html(html);
};

var listPaciente = function(results){
	var row = results.rows.item(0);
	$('#idPaciente').val(row.user_id);
	$('#nombre').val(row.user_name);
	$('#apellido').val(row.user_lastname);
	$('#motivo').val(row.careReason);
	$('#ecografista').val(row.sonographer);
	$('#lugarControl').val(row.controlPlace);
	$('#ciudad').val(row.city);
	$('#telefono').val(row.phone);
	$('#email').val(row.email);
	$('#fNacimiento').val(row.birthdate);
	$('#fum').val(row.fum);
	$('#fum2').val(row.fum);
	localStorage.fum = $('#fum').val();
	$('#fum').trigger( "change" );
	$('#fum2').trigger( "change" );
};

 $( '#peso').on('change', function() {
     $("#imc").val(aplication.imc($("#talla").val(), $(this).val()));
     $("#estNutricional").val(aplication.estadoNutricional($("#imc").val()));
 });

 $( '#talla').on('change', function() {
     $("#imc").val(aplication.imc($(this).val(), $("#peso").val()));
     $("#estNutricional").val(aplication.estadoNutricional($("#imc").val()));
 });

$( '.informacion').on('click', function() {
     $("#informacion").hide();
 });

$('#configTab a').click(function (e) {
  e.preventDefault()
  $('#configTab a[data-toggle="tab"]').removeClass('active');
  $(this).addClass('active');
  $('div .tab-pane').removeClass('active');
  $(this.hash).tab('show');
});

$( '#nuevoLugarConfig').on('click', function() {
	$('#lugarConfig .tabla').hide();
	$('#nuevoLugarConfig').hide();
	$('#editarLugarConfig').hide();
	$('#guardarLugarConfig').show();
	$('#cancelarLugarConfig').show();
	$('#lugarConfig .formulario').show();
 });

$( '#cancelarLugarConfig').on('click', function() {
	$("#lugarConfig .tabla").show();
	$('#nuevoLugarConfig').show();
	$('#editarLugarConfig').show();
	$('#guardarLugarConfig').hide();
	$('#cancelarLugarConfig').hide();
	$("#lugarConfig .formulario").hide();
 });

$( '#nuevoCiudadConfig').on('click', function() {
	$('#ciudadConfig .tabla').hide();
	$('#nuevoCiudadConfig').hide();
	$('#editarCiudadConfig').hide();
	$('#guardarCiudadConfig').show();
	$('#cancelarCiudadConfig').show();
	$('#ciudadConfig .formulario').show();
 });

$( '#cancelarCiudadConfig').on('click', function() {
	$("#ciudadConfig .tabla").show();
	$('#nuevoCiudadConfig').show();
	$('#editarCiudadConfig').show();
	$('#guardarCiudadConfig').hide();
	$('#cancelarCiudadConfig').hide();
	$("#ciudadConfig .formulario").hide();
 });

$( '#nuevoMotivoConfig').on('click', function() {
	$('#motivoConfig .tabla').hide();
	$('#nuevoMotivoConfig').hide();
	$('#editarMotivoConfig').hide();
	$('#guardarMotivoConfig').show();
	$('#cancelarMotivoConfig').show();
	$('#motivoConfig .formulario').show();
 });

$( '#cancelarMotivoConfig').on('click', function() {
	$("#motivoConfig .tabla").show();
	$('#nuevoMotivoConfig').show();
	$('#editarMotivoConfig').show();
	$('#guardarMotivoConfig').hide();
	$('#cancelarMotivoConfig').hide();
	$("#motivoConfig .formulario").hide();
 });

$( '#nuevoPoconConfig').on('click', function() {
	$('#poconConfig .tabla').hide();
	$('#nuevoPoconConfig').hide();
	$('#editarPoconConfig').hide();
	$('#guardarPoconConfig').show();
	$('#cancelarPoconConfig').show();
	$('#poconConfig .formulario').show();
 });

$( '#cancelarPoconConfig').on('click', function() {
	$("#poconConfig .tabla").show();
	$('#nuevoPoconConfig').show();
	$('#editarPoconConfig').show();
	$('#guardarPoconConfig').hide();
	$('#cancelarPoconConfig').hide();
	$("#poconConfig .formulario").hide();
 });

$( '#nuevoEcografistaConfig').on('click', function() {
	$('#ecografistaConfig .tabla').hide();
	$('#nuevoEcografistaConfig').hide();
	$('#editarEcografistaConfig').hide();
	$('#guardarEcografistaConfig').show();
	$('#cancelarEcografistaConfig').show();
	$('#ecografistaConfig .formulario').show();
 });

$( '#cancelarEcografistaConfig').on('click', function() {
	$("#ecografistaConfig .tabla").show();
	$('#nuevoEcografistaConfig').show();
	$('#editarEcografistaConfig').show();
	$('#guardarEcografistaConfig').hide();
	$('#cancelarEcografistaConfig').hide();
	$("#ecografistaConfig .formulario").hide();
 });

$( document ).ready(function() {
	//puedoGuardarEnElNavegador();
        //queDiaEs();
        //cualEsMiIp();
        //cargarDatosGenerales();
        //activarTooltips();
        //activarBotones();

	if (isIE()){
		console.log('navegador incompatible')
	}
	else{
		aplication = new app();
		
		graficoUno = null;
		graficoDos = null;
		graficoTres = null;
		graficoCuatro = null;
		
		if (aplication.checkBrowser == false){
			console.log(aplication.strings.error.browser);
		}
		else{
			show_hide('browser');
			aplication.run();
			loadPacientes(listPacientes);
			activarBotones();
			timeLoad = setInterval(tiempo, 1000);
			
		}
	}
});

function tiempo(){
	timeCount = parseInt(timeCount) +1;

	var widthProgress = $("#tiempoLectura").width()
	widthProgress = widthProgress + 1.6;
	$("#tiempoLectura").width(widthProgress);
	if (timeCount == 60){
	    clearInterval(timeLoad);
	    $( "#textoMensaje" ).fadeOut( 1600, "linear" );
	}
}

$(window).on('hashchange', function(){
	aplication.onHashChange();
});

$( '#loadPacienteSelect' ).on( 'click', function() {
    $('#popupTitle').html("Mensaje");
    $('#popupBody').html("<p>Módulo en construcción</p>");
    $('#popupGenerico').modal('show');
});

//toolkit bootstrap themes
!function(t, e) {
        function i() {
            return new Date(Date.UTC.apply(Date, arguments))
        }
        function s() {
            var t = new Date;
            return i(t.getFullYear(), t.getMonth(), t.getDate())
        }
        function a(t, e) {
            return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
        }
        function o(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        function r(e, i) {
            function n(t, e) {
                return e.toLowerCase()
            }
            var s, a = t(e).data(), o = {}, r = new RegExp("^" + i.toLowerCase() + "([A-Z])");
            i = new RegExp("^" + i.toLowerCase());
            for (var h in a)
                i.test(h) && (s = h.replace(r, n),
                o[s] = a[h]);
            return o
        }
        function h(e) {
            var i = {};
            if (_[e] || (e = e.split("-")[0],
            _[e])) {
                var n = _[e];
                return t.each(g, function(t, e) {
                    e in n && (i[e] = n[e])
                }),
                i
            }
        }
        var l = function() {
            var e = {
                get: function(t) {
                    return this.slice(t)[0]
                },
                contains: function(t) {
                    for (var e = t && t.valueOf(), i = 0, n = this.length; i < n; i++)
                        if (this[i].valueOf() === e)
                            return i;
                    return -1
                },
                remove: function(t) {
                    this.splice(t, 1)
                },
                replace: function(e) {
                    e && (t.isArray(e) || (e = [e]),
                    this.clear(),
                    this.push.apply(this, e))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var t = new l;
                    return t.replace(this),
                    t
                }
            };
            return function() {
                var i = [];
                return i.push.apply(i, arguments),
                t.extend(i, e),
                i
            }
        }()
          , c = function(e, i) {
            this._process_options(i),
            this.dates = new l,
            this.viewDate = this.o.defaultViewDate,
            this.focusDate = null,
            this.element = t(e),
            this.isInline = !1,
            this.isInput = this.element.is("input"),
            this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"),
            this.hasInput = this.component && this.element.find("input").length,
            this.component && 0 === this.component.length && (this.component = !1),
            this.picker = t(m.template),
            this._buildEvents(),
            this._attachEvents(),
            this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"),
            this.o.rtl && this.picker.addClass("datepicker-rtl"),
            this.viewMode = this.o.startView,
            this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                return parseInt(e) + 1
            }),
            this._allow_update = !1,
            this.setStartDate(this._o.startDate),
            this.setEndDate(this._o.endDate),
            this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),
            this.setDatesDisabled(this.o.datesDisabled),
            this.fillDow(),
            this.fillMonths(),
            this._allow_update = !0,
            this.update(),
            this.showMode(),
            this.isInline && this.show()
        };
        c.prototype = {
            constructor: c,
            _process_options: function(n) {
                this._o = t.extend({}, this._o, n);
                var a = this.o = t.extend({}, this._o)
                  , o = a.language;
                switch (_[o] || (o = o.split("-")[0],
                _[o] || (o = p.language)),
                a.language = o,
                a.startView) {
                case 2:
                case "decade":
                    a.startView = 2;
                    break;
                case 1:
                case "year":
                    a.startView = 1;
                    break;
                default:
                    a.startView = 0
                }
                switch (a.minViewMode) {
                case 1:
                case "months":
                    a.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    a.minViewMode = 2;
                    break;
                default:
                    a.minViewMode = 0
                }
                a.startView = Math.max(a.startView, a.minViewMode),
                a.multidate !== !0 && (a.multidate = Number(a.multidate) || !1,
                a.multidate !== !1 && (a.multidate = Math.max(0, a.multidate))),
                a.multidateSeparator = String(a.multidateSeparator),
                a.weekStart %= 7,
                a.weekEnd = (a.weekStart + 6) % 7;
                var r = m.parseFormat(a.format);
                if (a.startDate !== -(1 / 0) && (a.startDate ? a.startDate instanceof Date ? a.startDate = this._local_to_utc(this._zero_time(a.startDate)) : a.startDate = m.parseDate(a.startDate, r, a.language) : a.startDate = -(1 / 0)),
                a.endDate !== 1 / 0 && (a.endDate ? a.endDate instanceof Date ? a.endDate = this._local_to_utc(this._zero_time(a.endDate)) : a.endDate = m.parseDate(a.endDate, r, a.language) : a.endDate = 1 / 0),
                a.daysOfWeekDisabled = a.daysOfWeekDisabled || [],
                t.isArray(a.daysOfWeekDisabled) || (a.daysOfWeekDisabled = a.daysOfWeekDisabled.split(/[,\s]*/)),
                a.daysOfWeekDisabled = t.map(a.daysOfWeekDisabled, function(t) {
                    return parseInt(t, 10)
                }),
                a.datesDisabled = a.datesDisabled || [],
                !t.isArray(a.datesDisabled)) {
                    var h = [];
                    h.push(m.parseDate(a.datesDisabled, r, a.language)),
                    a.datesDisabled = h
                }
                a.datesDisabled = t.map(a.datesDisabled, function(t) {
                    return m.parseDate(t, r, a.language)
                });
                var l = String(a.orientation).toLowerCase().split(/\s+/g)
                  , c = a.orientation.toLowerCase();
                if (l = t.grep(l, function(t) {
                    return /^auto|left|right|top|bottom$/.test(t)
                }),
                a.orientation = {
                    x: "auto",
                    y: "auto"
                },
                c && "auto" !== c)
                    if (1 === l.length)
                        switch (l[0]) {
                        case "top":
                        case "bottom":
                            a.orientation.y = l[0];
                            break;
                        case "left":
                        case "right":
                            a.orientation.x = l[0]
                        }
                    else
                        c = t.grep(l, function(t) {
                            return /^left|right$/.test(t)
                        }),
                        a.orientation.x = c[0] || "auto",
                        c = t.grep(l, function(t) {
                            return /^top|bottom$/.test(t)
                        }),
                        a.orientation.y = c[0] || "auto";
                else
                    ;if (a.defaultViewDate) {
                    var d = a.defaultViewDate.year || (new Date).getFullYear()
                      , u = a.defaultViewDate.month || 0
                      , f = a.defaultViewDate.day || 1;
                    a.defaultViewDate = i(d, u, f)
                } else
                    a.defaultViewDate = s();
                a.showOnFocus = a.showOnFocus === e || a.showOnFocus
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(t) {
                for (var i, n, s, a = 0; a < t.length; a++)
                    i = t[a][0],
                    2 === t[a].length ? (n = e,
                    s = t[a][1]) : 3 === t[a].length && (n = t[a][1],
                    s = t[a][2]),
                    i.on(s, n)
            },
            _unapplyEvents: function(t) {
                for (var i, n, s, a = 0; a < t.length; a++)
                    i = t[a][0],
                    2 === t[a].length ? (s = e,
                    n = t[a][1]) : 3 === t[a].length && (s = t[a][1],
                    n = t[a][2]),
                    i.off(n, s)
            },
            _buildEvents: function() {
                var e = {
                    keyup: t.proxy(function(e) {
                        t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                };
                this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)),
                this.isInput ? this._events = [[this.element, e]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), e], [this.component, {
                    click: t.proxy(this.show, this)
                }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                    click: t.proxy(this.show, this)
                }]],
                this._events.push([this.element, "*", {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }], [this.element, {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }]),
                this._secondaryEvents = [[this.picker, {
                    click: t.proxy(this.click, this)
                }], [t(window), {
                    resize: t.proxy(this.place, this)
                }], [t(document), {
                    "mousedown touchstart": t.proxy(function(t) {
                        this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                    }, this)
                }]]
            },
            _attachEvents: function() {
                this._detachEvents(),
                this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(),
                this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(e, i) {
                var n = i || this.dates.get(-1)
                  , s = this._utc_to_local(n);
                this.element.trigger({
                    type: e,
                    date: s,
                    dates: t.map(this.dates, this._utc_to_local),
                    format: t.proxy(function(t, e) {
                        0 === arguments.length ? (t = this.dates.length - 1,
                        e = this.o.format) : "string" == typeof t && (e = t,
                        t = this.dates.length - 1),
                        e = e || this.o.format;
                        var i = this.dates.get(t);
                        return m.formatDate(i, e, this.o.language)
                    }, this)
                })
            },
            show: function() {
                if (!this.element.attr("readonly"))
                    return this.isInline || this.picker.appendTo(this.o.container),
                    this.place(),
                    this.picker.show(),
                    this._attachSecondaryEvents(),
                    this._trigger("show"),
                    (window.navigator.msMaxTouchPoints || "ontouchstart"in document) && this.o.disableTouchKeyboard && t(this.element).blur(),
                    this
            },
            hide: function() {
                return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null,
                this.picker.hide().detach(),
                this._detachSecondaryEvents(),
                this.viewMode = this.o.startView,
                this.showMode(),
                this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(),
                this._trigger("hide"),
                this) : this
            },
            remove: function() {
                return this.hide(),
                this._detachEvents(),
                this._detachSecondaryEvents(),
                this.picker.remove(),
                delete this.element.data().datepicker,
                this.isInput || delete this.element.data().date,
                this
            },
            _utc_to_local: function(t) {
                return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
            },
            _local_to_utc: function(t) {
                return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
            },
            _zero_time: function(t) {
                return t && new Date(t.getFullYear(),t.getMonth(),t.getDate())
            },
            _zero_utc_time: function(t) {
                return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
            },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return t.map(this.dates, function(t) {
                    return new Date(t)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var t = this.dates.get(-1);
                return "undefined" != typeof t ? new Date(t) : null
            },
            clearDates: function() {
                var t;
                this.isInput ? t = this.element : this.component && (t = this.element.find("input")),
                t && t.val("").change(),
                this.update(),
                this._trigger("changeDate"),
                this.o.autoclose && this.hide()
            },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e),
                this._trigger("changeDate"),
                this.setValue(),
                this
            },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t.map(e, this._utc_to_local)),
                this._trigger("changeDate"),
                this.setValue(),
                this
            },
            setDate: o("setDates"),
            setUTCDate: o("setUTCDates"),
            setValue: function() {
                var t = this.getFormattedDate();
                return this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change(),
                this
            },
            getFormattedDate: function(i) {
                i === e && (i = this.o.format);
                var n = this.o.language;
                return t.map(this.dates, function(t) {
                    return m.formatDate(t, i, n)
                }).join(this.o.multidateSeparator)
            },
            setStartDate: function(t) {
                return this._process_options({
                    startDate: t
                }),
                this.update(),
                this.updateNavArrows(),
                this
            },
            setEndDate: function(t) {
                return this._process_options({
                    endDate: t
                }),
                this.update(),
                this.updateNavArrows(),
                this
            },
            setDaysOfWeekDisabled: function(t) {
                return this._process_options({
                    daysOfWeekDisabled: t
                }),
                this.update(),
                this.updateNavArrows(),
                this
            },
            setDatesDisabled: function(t) {
                this._process_options({
                    datesDisabled: t
                }),
                this.update(),
                this.updateNavArrows()
            },
            place: function() {
                if (this.isInline)
                    return this;
                var e = this.picker.outerWidth()
                  , i = this.picker.outerHeight()
                  , n = 10
                  , s = t(this.o.container).width()
                  , a = t(this.o.container).height()
                  , o = t(this.o.container).scrollTop()
                  , r = t(this.o.container).offset()
                  , h = [];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index");
                    "auto" !== e && 0 !== e && h.push(parseInt(e))
                });
                var l = Math.max.apply(Math, h) + 10
                  , c = this.component ? this.component.parent().offset() : this.element.offset()
                  , d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1)
                  , u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1)
                  , f = c.left - r.left
                  , p = c.top - r.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
                "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
                "right" === this.o.orientation.x && (f -= e - u)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"),
                f -= c.left - n) : f + e > s ? (this.picker.addClass("datepicker-orient-right"),
                f = c.left + u - e) : this.picker.addClass("datepicker-orient-left");
                var g, _, m = this.o.orientation.y;
                if ("auto" === m && (g = -o + p - i,
                _ = o + a - (p + d + i),
                m = Math.max(g, _) === _ ? "top" : "bottom"),
                this.picker.addClass("datepicker-orient-" + m),
                "top" === m ? p += d : p -= i + parseInt(this.picker.css("padding-top")),
                this.o.rtl) {
                    var v = s - (f + u);
                    this.picker.css({
                        top: p,
                        right: v,
                        zIndex: l
                    })
                } else
                    this.picker.css({
                        top: p,
                        left: f,
                        zIndex: l
                    });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update)
                    return this;
                var e = this.dates.copy()
                  , i = []
                  , n = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)),
                    i.push(e)
                }, this)),
                n = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(),
                i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i],
                delete this.element.data().date),
                i = t.map(i, t.proxy(function(t) {
                    return m.parseDate(t, this.o.format, this.o.language)
                }, this)),
                i = t.grep(i, t.proxy(function(t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0),
                this.dates.replace(i),
                this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)),
                n ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"),
                !this.dates.length && e.length && this._trigger("clearDate"),
                this.fill(),
                this
            },
            fillDow: function() {
                var t = this.o.weekStart
                  , e = "<tr>";
                if (this.o.calendarWeeks) {
                    this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(t, e) {
                        return parseInt(e) + 1
                    });
                    var i = '<th class="cw">&#160;</th>';
                    e += i
                }
                for (; t < this.o.weekStart + 7; )
                    e += '<th class="dow">' + _[this.o.language].daysMin[t++ % 7] + "</th>";
                e += "</tr>",
                this.picker.find(".datepicker-days thead").append(e)
            },
            fillMonths: function() {
                for (var t = "", e = 0; e < 12; )
                    t += '<span class="month">' + _[this.o.language].monthsShort[e++] + "</span>";
                this.picker.find(".datepicker-months td").html(t)
            },
            setRange: function(e) {
                e && e.length ? this.range = t.map(e, function(t) {
                    return t.valueOf()
                }) : delete this.range,
                this.fill()
            },
            getClassNames: function(e) {
                var i = []
                  , n = this.viewDate.getUTCFullYear()
                  , s = this.viewDate.getUTCMonth()
                  , o = new Date;
                return e.getUTCFullYear() < n || e.getUTCFullYear() === n && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() === n && e.getUTCMonth() > s) && i.push("new"),
                this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"),
                this.o.todayHighlight && e.getUTCFullYear() === o.getFullYear() && e.getUTCMonth() === o.getMonth() && e.getUTCDate() === o.getDate() && i.push("today"),
                this.dates.contains(e) !== -1 && i.push("active"),
                (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) && i.push("disabled"),
                this.o.datesDisabled.length > 0 && t.grep(this.o.datesDisabled, function(t) {
                    return a(e, t)
                }).length > 0 && i.push("disabled", "disabled-date"),
                this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"),
                t.inArray(e.valueOf(), this.range) !== -1 && i.push("selected")),
                i
            },
            fill: function() {
                var n, s = new Date(this.viewDate), a = s.getUTCFullYear(), o = s.getUTCMonth(), r = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), h = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, d = _[this.o.language].today || _.en.today || "", u = _[this.o.language].clear || _.en.clear || "";
                if (!isNaN(a) && !isNaN(o)) {
                    this.picker.find(".datepicker-days thead .datepicker-switch").text(_[this.o.language].months[o] + " " + a),
                    this.picker.find("tfoot .today").text(d).toggle(this.o.todayBtn !== !1),
                    this.picker.find("tfoot .clear").text(u).toggle(this.o.clearBtn !== !1),
                    this.updateNavArrows(),
                    this.fillMonths();
                    var f = i(a, o - 1, 28)
                      , p = m.getDaysInMonth(f.getUTCFullYear(), f.getUTCMonth());
                    f.setUTCDate(p),
                    f.setUTCDate(p - (f.getUTCDay() - this.o.weekStart + 7) % 7);
                    var g = new Date(f);
                    g.setUTCDate(g.getUTCDate() + 42),
                    g = g.valueOf();
                    for (var v, D = []; f.valueOf() < g; ) {
                        if (f.getUTCDay() === this.o.weekStart && (D.push("<tr>"),
                        this.o.calendarWeeks)) {
                            var y = new Date(+f + (this.o.weekStart - f.getUTCDay() - 7) % 7 * 864e5)
                              , T = new Date(Number(y) + (11 - y.getUTCDay()) % 7 * 864e5)
                              , E = new Date(Number(E = i(T.getUTCFullYear(), 0, 1)) + (11 - E.getUTCDay()) % 7 * 864e5)
                              , C = (T - E) / 864e5 / 7 + 1;
                            D.push('<td class="cw">' + C + "</td>")
                        }
                        if (v = this.getClassNames(f),
                        v.push("day"),
                        this.o.beforeShowDay !== t.noop) {
                            var w = this.o.beforeShowDay(this._utc_to_local(f));
                            w === e ? w = {} : "boolean" == typeof w ? w = {
                                enabled: w
                            } : "string" == typeof w && (w = {
                                classes: w
                            }),
                            w.enabled === !1 && v.push("disabled"),
                            w.classes && (v = v.concat(w.classes.split(/\s+/))),
                            w.tooltip && (n = w.tooltip)
                        }
                        v = t.unique(v),
                        D.push('<td class="' + v.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ">" + f.getUTCDate() + "</td>"),
                        n = null,
                        f.getUTCDay() === this.o.weekEnd && D.push("</tr>"),
                        f.setUTCDate(f.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").empty().append(D.join(""));
                    var I = this.picker.find(".datepicker-months").find("th:eq(1)").text(a).end().find("span").removeClass("active");
                    if (t.each(this.dates, function(t, e) {
                        e.getUTCFullYear() === a && I.eq(e.getUTCMonth()).addClass("active")
                    }),
                    (a < r || a > l) && I.addClass("disabled"),
                    a === r && I.slice(0, h).addClass("disabled"),
                    a === l && I.slice(c + 1).addClass("disabled"),
                    this.o.beforeShowMonth !== t.noop) {
                        var A = this;
                        t.each(I, function(e, i) {
                            if (!t(i).hasClass("disabled")) {
                                var n = new Date(a,e,1)
                                  , s = A.o.beforeShowMonth(n);
                                s === !1 && t(i).addClass("disabled")
                            }
                        })
                    }
                    D = "",
                    a = 10 * parseInt(a / 10, 10);
                    var S = this.picker.find(".datepicker-years").find("th:eq(1)").text(a + "-" + (a + 9)).end().find("td");
                    a -= 1;
                    for (var b, O = t.map(this.dates, function(t) {
                        return t.getUTCFullYear()
                    }), k = -1; k < 11; k++)
                        b = ["year"],
                        k === -1 ? b.push("old") : 10 === k && b.push("new"),
                        t.inArray(a, O) !== -1 && b.push("active"),
                        (a < r || a > l) && b.push("disabled"),
                        D += '<span class="' + b.join(" ") + '">' + a + "</span>",
                        a += 1;
                    S.html(D)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var t = new Date(this.viewDate)
                      , e = t.getUTCFullYear()
                      , i = t.getUTCMonth();
                    switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }),
                        this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }),
                        this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                    }
                }
            },
            click: function(e) {
                e.preventDefault();
                var n, s, a, o = t(e.target).closest("span, td, th");
                if (1 === o.length)
                    switch (o[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (o[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var r = m.modes[this.viewMode].navStep * ("prev" === o[0].className ? -1 : 1);
                            switch (this.viewMode) {
                            case 0:
                                this.viewDate = this.moveMonth(this.viewDate, r),
                                this._trigger("changeMonth", this.viewDate);
                                break;
                            case 1:
                            case 2:
                                this.viewDate = this.moveYear(this.viewDate, r),
                                1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            var h = new Date;
                            h = i(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0),
                            this.showMode(-2);
                            var l = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(h, l);
                            break;
                        case "clear":
                            this.clearDates()
                        }
                        break;
                    case "span":
                        o.hasClass("disabled") || (this.viewDate.setUTCDate(1),
                        o.hasClass("month") ? (a = 1,
                        s = o.parent().find("span").index(o),
                        n = this.viewDate.getUTCFullYear(),
                        this.viewDate.setUTCMonth(s),
                        this._trigger("changeMonth", this.viewDate),
                        1 === this.o.minViewMode && this._setDate(i(n, s, a))) : (a = 1,
                        s = 0,
                        n = parseInt(o.text(), 10) || 0,
                        this.viewDate.setUTCFullYear(n),
                        this._trigger("changeYear", this.viewDate),
                        2 === this.o.minViewMode && this._setDate(i(n, s, a))),
                        this.showMode(-1),
                        this.fill());
                        break;
                    case "td":
                        o.hasClass("day") && !o.hasClass("disabled") && (a = parseInt(o.text(), 10) || 1,
                        n = this.viewDate.getUTCFullYear(),
                        s = this.viewDate.getUTCMonth(),
                        o.hasClass("old") ? 0 === s ? (s = 11,
                        n -= 1) : s -= 1 : o.hasClass("new") && (11 === s ? (s = 0,
                        n += 1) : s += 1),
                        this._setDate(i(n, s, a)))
                    }
                this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(),
                delete this._focused_from
            },
            _toggle_multidate: function(t) {
                var e = this.dates.contains(t);
                if (t || this.dates.clear(),
                e !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(),
                this.dates.push(t)) : this.dates.push(t),
                "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate; )
                        this.dates.remove(0)
            },
            _setDate: function(t, e) {
                e && "date" !== e || this._toggle_multidate(t && new Date(t)),
                e && "view" !== e || (this.viewDate = t && new Date(t)),
                this.fill(),
                this.setValue(),
                e && "view" === e || this._trigger("changeDate");
                var i;
                this.isInput ? i = this.element : this.component && (i = this.element.find("input")),
                i && i.change(),
                !this.o.autoclose || e && "date" !== e || this.hide()
            },
            moveMonth: function(t, i) {
                if (!t)
                    return e;
                if (!i)
                    return t;
                var n, s, a = new Date(t.valueOf()), o = a.getUTCDate(), r = a.getUTCMonth(), h = Math.abs(i);
                if (i = i > 0 ? 1 : -1,
                1 === h)
                    s = i === -1 ? function() {
                        return a.getUTCMonth() === r
                    }
                    : function() {
                        return a.getUTCMonth() !== n
                    }
                    ,
                    n = r + i,
                    a.setUTCMonth(n),
                    (n < 0 || n > 11) && (n = (n + 12) % 12);
                else {
                    for (var l = 0; l < h; l++)
                        a = this.moveMonth(a, i);
                    n = a.getUTCMonth(),
                    a.setUTCDate(o),
                    s = function() {
                        return n !== a.getUTCMonth()
                    }
                }
                for (; s(); )
                    a.setUTCDate(--o),
                    a.setUTCMonth(n);
                return a
            },
            moveYear: function(t, e) {
                return this.moveMonth(t, 12 * e)
            },
            dateWithinRange: function(t) {
                return t >= this.o.startDate && t <= this.o.endDate
            },
            keydown: function(t) {
                if (!this.picker.is(":visible"))
                    return void (27 === t.keyCode && this.show());
                var e, i, n, a = !1, o = this.focusDate || this.viewDate;
                switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null,
                    this.viewDate = this.dates.get(-1) || this.viewDate,
                    this.fill()) : this.hide(),
                    t.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation)
                        break;
                    e = 37 === t.keyCode ? -1 : 1,
                    t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e),
                    n = this.moveYear(o, e),
                    this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e),
                    n = this.moveMonth(o, e),
                    this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || s()),
                    i.setUTCDate(i.getUTCDate() + e),
                    n = new Date(o),
                    n.setUTCDate(o.getUTCDate() + e)),
                    this.dateWithinRange(n) && (this.focusDate = this.viewDate = n,
                    this.setValue(),
                    this.fill(),
                    t.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation)
                        break;
                    e = 38 === t.keyCode ? -1 : 1,
                    t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e),
                    n = this.moveYear(o, e),
                    this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e),
                    n = this.moveMonth(o, e),
                    this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || s()),
                    i.setUTCDate(i.getUTCDate() + 7 * e),
                    n = new Date(o),
                    n.setUTCDate(o.getUTCDate() + 7 * e)),
                    this.dateWithinRange(n) && (this.focusDate = this.viewDate = n,
                    this.setValue(),
                    this.fill(),
                    t.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    o = this.focusDate || this.dates.get(-1) || this.viewDate,
                    this.o.keyboardNavigation && (this._toggle_multidate(o),
                    a = !0),
                    this.focusDate = null,
                    this.viewDate = this.dates.get(-1) || this.viewDate,
                    this.setValue(),
                    this.fill(),
                    this.picker.is(":visible") && (t.preventDefault(),
                    "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
                    this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null,
                    this.viewDate = this.dates.get(-1) || this.viewDate,
                    this.fill(),
                    this.hide()
                }
                if (a) {
                    this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                    var r;
                    this.isInput ? r = this.element : this.component && (r = this.element.find("input")),
                    r && r.change()
                }
            },
            showMode: function(t) {
                t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))),
                this.picker.children("div").hide().filter(".datepicker-" + m.modes[this.viewMode].clsName).css("display", "block"),
                this.updateNavArrows()
            }
        };
        var d = function(e, i) {
            this.element = t(e),
            this.inputs = t.map(i.inputs, function(t) {
                return t.jquery ? t[0] : t
            }),
            delete i.inputs,
            f.call(t(this.inputs), i).bind("changeDate", t.proxy(this.dateUpdated, this)),
            this.pickers = t.map(this.inputs, function(e) {
                return t(e).data("datepicker")
            }),
            this.updateDates()
        };
        d.prototype = {
            updateDates: function() {
                this.dates = t.map(this.pickers, function(t) {
                    return t.getUTCDate()
                }),
                this.updateRanges()
            },
            updateRanges: function() {
                var e = t.map(this.dates, function(t) {
                    return t.valueOf()
                });
                t.each(this.pickers, function(t, i) {
                    i.setRange(e)
                })
            },
            dateUpdated: function(e) {
                if (!this.updating) {
                    this.updating = !0;
                    var i = t(e.target).data("datepicker")
                      , n = i.getUTCDate()
                      , s = t.inArray(e.target, this.inputs)
                      , a = s - 1
                      , o = s + 1
                      , r = this.inputs.length;
                    if (s !== -1) {
                        if (t.each(this.pickers, function(t, e) {
                            e.getUTCDate() || e.setUTCDate(n)
                        }),
                        n < this.dates[a])
                            for (; a >= 0 && n < this.dates[a]; )
                                this.pickers[a--].setUTCDate(n);
                        else if (n > this.dates[o])
                            for (; o < r && n > this.dates[o]; )
                                this.pickers[o++].setUTCDate(n);
                        this.updateDates(),
                        delete this.updating
                    }
                }
            },
            remove: function() {
                t.map(this.pickers, function(t) {
                    t.remove()
                }),
                delete this.element.data().datepicker
            }
        };
        var u = t.fn.datepicker
          , f = function(i) {
            var s = Array.apply(null, arguments);
            s.shift();
            var a;
            return this.each(function() {
                var o = t(this)
                  , l = o.data("datepicker")
                  , u = "object" === ("undefined" == typeof i ? "undefined" : n(i)) && i;
                if (!l) {
                    var f = r(this, "date")
                      , g = t.extend({}, p, f, u)
                      , _ = h(g.language)
                      , m = t.extend({}, p, _, f, u);
                    if (o.hasClass("input-daterange") || m.inputs) {
                        var v = {
                            inputs: m.inputs || o.find("input").toArray()
                        };
                        o.data("datepicker", l = new d(this,t.extend(m, v)))
                    } else
                        o.data("datepicker", l = new c(this,m))
                }
                if ("string" == typeof i && "function" == typeof l[i] && (a = l[i].apply(l, s),
                a !== e))
                    return !1
            }),
            a !== e ? a : this
        };
        t.fn.datepicker = f;
        var p = t.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: t.noop,
            beforeShowMonth: t.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            toggleActive: !1,
            daysOfWeekDisabled: [],
            datesDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "dd/mm/yyyy",
            keyboardNavigation: !0,
            language: "es",
            minViewMode: 0,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -(1 / 0),
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0,
            disableTouchKeyboard: !1,
            container: "body"
        }
          , g = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = c;
        var _ = t.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear"
            },
	    es: {
                days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
                daysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
                daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                today: "Hoy",
                clear: "Limpiar"
            }
        }
          , m = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            },
            getDaysInMonth: function(t, e) {
                return [31, m.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function(t) {
                var e = t.replace(this.validParts, "\0").split("\0")
                  , i = t.match(this.validParts);
                if (!e || !e.length || !i || 0 === i.length)
                    throw new Error("Invalid date format.");
                return {
                    separators: e,
                    parts: i
                }
            },
            parseDate: function(n, s, a) {
                function o() {
                    var t = this.slice(0, u[l].length)
                      , e = u[l].slice(0, t.length);
                    return t.toLowerCase() === e.toLowerCase()
                }
                if (!n)
                    return e;
                if (n instanceof Date)
                    return n;
                "string" == typeof s && (s = m.parseFormat(s));
                var r, h, l, d = /([\-+]\d+)([dmwy])/, u = n.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
                    for (n = new Date,
                    l = 0; l < u.length; l++)
                        switch (r = d.exec(u[l]),
                        h = parseInt(r[1]),
                        r[2]) {
                        case "d":
                            n.setUTCDate(n.getUTCDate() + h);
                            break;
                        case "m":
                            n = c.prototype.moveMonth.call(c.prototype, n, h);
                            break;
                        case "w":
                            n.setUTCDate(n.getUTCDate() + 7 * h);
                            break;
                        case "y":
                            n = c.prototype.moveYear.call(c.prototype, n, h)
                        }
                    return i(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0)
                }
                u = n && n.match(this.nonpunctuation) || [],
                n = new Date;
                var f, p, g = {}, v = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], D = {
                    yyyy: function(t, e) {
                        return t.setUTCFullYear(e)
                    },
                    yy: function(t, e) {
                        return t.setUTCFullYear(2e3 + e)
                    },
                    m: function(t, e) {
                        if (isNaN(t))
                            return t;
                        for (e -= 1; e < 0; )
                            e += 12;
                        for (e %= 12,
                        t.setUTCMonth(e); t.getUTCMonth() !== e; )
                            t.setUTCDate(t.getUTCDate() - 1);
                        return t
                    },
                    d: function(t, e) {
                        return t.setUTCDate(e)
                    }
                };
                D.M = D.MM = D.mm = D.m,
                D.dd = D.d,
                n = i(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
                var y = s.parts.slice();
                if (u.length !== y.length && (y = t(y).filter(function(e, i) {
                    return t.inArray(i, v) !== -1
                }).toArray()),
                u.length === y.length) {
                    var T;
                    for (l = 0,
                    T = y.length; l < T; l++) {
                        if (f = parseInt(u[l], 10),
                        r = y[l],
                        isNaN(f))
                            switch (r) {
                            case "MM":
                                p = t(_[a].months).filter(o),
                                f = t.inArray(p[0], _[a].months) + 1;
                                break;
                            case "M":
                                p = t(_[a].monthsShort).filter(o),
                                f = t.inArray(p[0], _[a].monthsShort) + 1
                            }
                        g[r] = f
                    }
                    var E, C;
                    for (l = 0; l < v.length; l++)
                        C = v[l],
                        C in g && !isNaN(g[C]) && (E = new Date(n),
                        D[C](E, g[C]),
                        isNaN(E) || (n = E))
                }
                return n
            },
            formatDate: function(e, i, n) {
                if (!e)
                    return "";
                "string" == typeof i && (i = m.parseFormat(i));
                var s = {
                    d: e.getUTCDate(),
                    D: _[n].daysShort[e.getUTCDay()],
                    DD: _[n].days[e.getUTCDay()],
                    m: e.getUTCMonth() + 1,
                    M: _[n].monthsShort[e.getUTCMonth()],
                    MM: _[n].months[e.getUTCMonth()],
                    yy: e.getUTCFullYear().toString().substring(2),
                    yyyy: e.getUTCFullYear()
                };
                s.dd = (s.d < 10 ? "0" : "") + s.d,
                s.mm = (s.m < 10 ? "0" : "") + s.m,
                e = [];
                for (var a = t.extend([], i.separators), o = 0, r = i.parts.length; o <= r; o++)
                    a.length && e.push(a.shift()),
                    e.push(s[i.parts[o]]);
                return e.join("")
            },
            headTemplate: '<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
        m.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + m.headTemplate + "<tbody></tbody>" + m.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + "</table></div></div>",
        t.fn.datepicker.DPGlobal = m,
        t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = u,
            this
        }
        ,
        t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
            var i = t(this);
            i.data("datepicker") || (e.preventDefault(),
            f.call(i, "show"))
        }),
        t(function() {
            f.call(t('[data-provide="datepicker-inline"]'))
        })
    }(window.jQuery);
