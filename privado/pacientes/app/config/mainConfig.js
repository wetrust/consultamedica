export class mainConfig {
    static container = "viewDB";
    static iconFiltro = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16"><path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/></svg>';
    static filterElements = [
        {nombre:"Fecha", name: "filtro_fecha", filter:"paciente_fee", placeholder: "", type:"date"},
        {nombre:"Rut", name: "filtro_rut", filter:"paciente_rut", placeholder: "Por RUT", type:"text"},
        {nombre:"Nombre", name: "filtro_nombre", filter:"paciente_nombre", placeholder: "Por Nombre", type:"text"},
        {nombre:"Apellido", name: "filtro_apellido", filter:"paciente_apellido", placeholder: "Por Apellido", type:"text"},
        {nombre:"Centro", name: "filtro_centro", filter:"paciente_centro", placeholder: "Por centro", type:"text"},
        {nombre:"Tipo", name: "filtro_tipo", filter:"paciente_tipo", placeholder: "Por Tipo", type:"text"}
    ]
}