x

coef_efw: [
    [.025, -.230518383014592, .400511116318458, -.00617993235833267, 316595762972649e-19], 
    [.05, -.162057103557898, .393965369913166, -.00579733056422172, 255319128239087e-19], 
    [.1, -.0455887642525626, .389314052082164, -.00574527674062641, 265557891064333e-19], 
    [.25, -.012258767992062, .393836404898322, -.00592304885519551, 28863017896588e-18], 
    [.5, .157310086966445, .383067935520509, -.00554046846639963, 246570062800598e-19], 
    [.75, .293297386426919, .376096229210412, -.00529255036113726, 218372277641981e-19], 
    [.9, .353142227490073, .376486874470206, -.00528742945785833, 214760212556463e-19], 
    [.95, .285025055968914, .390621472299378, -.00582929182402995, 279088693116937e-19], 
    [.975, .408170594889372, .381068214664342, -.00550913922743603, 246713147783532e-19]],
coef_efw_male: [[.025, -.52610096513854, .44906549056954, -.0089009550762548, 9868293523919e-17, -6.1862373692705e-7], [.05, -.264562353403465, .412210701662848, -.00659353966698675, 387085414793403e-19, -5.92167006518022e-8], [.1, -.0631025226657407, .390993877846881, -.00560764189001381, 190944627895524e-19, 8.84241803692905e-8], [.25, -.136872920737678, .411385471212291, -.00662710457053528, 401078967104191e-19, -6.09266544869339e-8], [.5, .222999048464601, .372888830200871, -.00482835487505679, 538927935557086e-20, 1.72630247811947e-7], [.75, .274568726691847, .381231662554576, -.00557248890309729, 2934934995138e-17, -8.27628809790136e-8], [.9, .240213697127957, .391178494734445, -.00579538706713982, 275733050639858e-19, -1.90970772277149e-8], [.95, .238080920038937, .394765675971259, -.00581267491399174, 231531669574572e-19, 6.85345268671191e-8], [.975, .79018076483077, .32585025131141, -.0025559098706069, -42038969571238e-18, 5.4228420412733e-7]],
coef_efw_female: [[.025, -.915523725804273, .529374415518249, -.0147446585943781, .000269201219853759, -23537061714461e-19], [.05, -.0356552265566936, .376064209229977, -.00496950115937874, 100880399508847e-19, 8.87897379966417e-8], [.1, .155170122624531, .356594762998776, -.00401282727802378, -114891004630409e-19, 2.91905926442287e-7], [.25, -.00617926685323766, .391489315579454, -.00583983363713264, 274701265932854e-19, 1.25218741602196e-8], [.5, .247277418113423, .370440200280727, -.00507278668575342, 179658724333519e-19, 3.17102018612384e-8], [.75, .376784712355285, .361976162764535, -.00463535949504953, 851326693543256e-20, 1.04436638183705e-7], [.9, .286538459425835, .387048945293849, -.00606592437416756, 419335923075893e-19, -1.64397771502855e-7], [.95, .381320788764689, .376613696575359, -.00528117982372732, 181818929490566e-19, 7.60085577423407e-8], [.975, .32551154984358, .40214557617585, -.0074145176202411, 88196644838898e-18, -7.1015932637436e-7]],
quantiles: [.025, .05, .1, .25, .5, .75, .9, .95, .975],

find_quantile: function(e, t, a) {
    e = this.qtable(e, t);
    for (var i = 1; i < e.length; i++) {
        var r = e[i],
            n = e[i - 1];
        if (t == r[1] && t == n[1] && a >= n[2] && a <= r[2])
            return [n, r]
    }
    return null
},
solvePolynomial: function(e, t, a, i, r, n) {
    return Math.exp(t + e * (a + e * (i + e * (r + e * n))))
},
qtable: function(e, t) {
    for (var a = [], i = 0; i < e.length; i++) {
        var r = e[i],
            n = t;
        a.push([r[0], n, this.solvePolynomial(n, r[1], r[2], r[3], r[4], r[5] || 0)])
    }
    return a
},
getInterpolation: function(e, t, a) {
    if (t = this.find_quantile(e, t, a), null == t)
        return null;
    e = t[0],
    t = t[1];
    var i = e[2];
    return e = e[0], e + (a - i) / (t[2] - i) * (t[0] - e)
}

calculateQuantileMethod: function(e, t) {
    return this.getInterpolation(this.coefficients(this.parameter, t), e, t)
},
formattedPercentile: function(e, t) {
    return t ? (e = this.percentile(e, t), "number" == typeof e ? e.toFixed(1) : e) : "&mdash;"
},
percentile: function(e, t) {
    return this.isInsideBounds(e, t) ? parseFloat((100 * this.interpolation(e, t)).toFixed(1)) : t < this.lowerBound(e, t) ? "<2.5" : t > this.upperBound(e, t) ? ">97.5" : void 0
},
isInsideBounds: function(e, t) {
    return t >= this.lowerBound(e, t) && t <= this.upperBound(e, t)
},
lowerBound: function(e, t) {
    return e = this.coefficients(e, t)[0], this.solvePolynomial(this.age, e[1], e[2], e[3], e[4], e[5] || 0)
},
upperBound: function(e, t) {
    return e = this.coefficients(e, t)[this.coefficients(e, t).length - 1], this.solvePolynomial(this.age, e[1], e[2], e[3], e[4], e[5] || 0)
},
interpolation: function(e, t) {
    return this.getInterpolation(this.coefficients(e, t), this.age, t)
},
coefficients: function(e, t) {
    return "efw" == e && this.gender ? Data["coef_" + e + "_" + this.gender] : Data["coef_" + e]
},
validateHadlock: function() {
    var e = this;
    return this.$set(this.isInvalid, "ac", !this.measurementBag.ac), this.$set(this.isInvalid, "hc", !this.measurementBag.hc), this.$set(this.isInvalid, "fl", !this.measurementBag.fl), !(0, r["default"])(this.isInvalid).find(function(t) {
        return e.isInvalid[t]
    })
},
calculateHadlock: function() {
    this.validateHadlock() && (this.measurementBag.efw = this.estimatedWeight)
},
estimatedWeightClicked: function() {
    this.parameter = "efw",
    this.measurement = this.estimatedWeight,
    this.showModal = !1
},
weeksChanged: function() {
    40 < this.weeks ? this.weeks = 40 : 40 == this.weeks ? this.inputDays = 0 : 14 > this.weeks && (this.weeks = 14)
},
daysChanged: function(e) {
    6 < this.inputDays ? this.inputDays = 6 : 0 > this.inputDays && (this.inputDays = 0)
}

ageDays: function() {
    return 7 * this.weeks + this.days
},

chartData: function() {
    var e = {labels: [],datasets: []}, t = Math.floor(this.ageDays / 7);
    if (14 == t)
        var a = 98,
            i = 126;
    else
        15 == t ? (a = 98, i = 126) : 
        39 == t ? (a = 252, i = 280) : 
        40 == t ? (a = 252, i = 280) : 
        (a = 14 > t - 2 ? 98 : 7 * (t - 2), 
        i = 40 < t + 2 ? 280 : 7 * (t + 2));

    for (var r = a; r <= i; r += 1)
        e.labels.push(r);

    for (var n = this.coefficients, s = 0; s < Data.quantiles.length; s++)
        for (t = Data.quantiles[s], e.datasets.push({
            label: 100 * t + this.suffix(100 * t),
            backgroundColor: Data.quantileColors[s],
            borderColor: Data.quantileColors[s],
            data: [],
            fill: !1,
            pointRadius: .1,
            lineTension: 0,
            borderWidth: 1.5
        }), r = a; r <= i; r += 1)
            for (var o = 0; o < n.length; o++)
                if (n[o][0] == t) {
                    var l = n[o],
                        c = r / 7;
                    e.datasets[s].data.push(Math.exp(l[1] + c * (l[2] + c * (l[3] + c * (l[4] + c * (l[5] || 0))))))
                }
    return this.measurement && (this.calculateQuantileMethod(this.age, this.measurement), e.datasets.push({
        data: [{
            x: this.ageDays,
            y: this.measurement
        }],
        pointRadius: 7,
        pointStyle: "star",
        label: this.percentile,
        backgroundColor: "#3f7d4f",
        borderColor: "#3f7d4f",
        borderWidth: 2,
        hoverRadius: 10,
        hoverBorderWidth: 2
    })), e
}