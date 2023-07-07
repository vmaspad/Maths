var chart;

function updateChart() {
  var a = parseFloat(document.getElementById("input-a").value);
  var b = parseFloat(document.getElementById("input-b").value);

  var ctx = document.getElementById("graph").getContext("2d");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Ecuación Lineal",
          data: [
            { x: -40, y: a * -10 + b },
            { x: 40, y: a * 10 + b }
          ],
          borderColor: "blue",
          fill: false
        },
        {
          label: "Eje X",
          data: [{ x: -10000, y: 0 }, { x: 10000, y: 0 }],
          showLine: true,
          borderColor: "red",
          backgroundColor: "transparent"
        },
        {
          label: "Eje Y",
          data: [{ x: 0, y: -10000 }, { x: 0, y: 10000 }],
          showLine: true,
          borderColor: "green",
          backgroundColor: "transparent"
        }
      ]
    },
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          min: -40,
          max: 40,
          ticks: {
            stepSize: 1
          }
        },
        y: {
          type: "linear",
          position: "left",
          min: -40,
          max: 40,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true
            },
            pinch: {
              enabled: true
            },
            mode: "xy"
          }
        }
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y",
            value: 0,
            borderColor: "black",
            borderWidth: 1,
            borderDash: [5, 5]
          },
          {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: 0,
            borderColor: "black",
            borderWidth: 1,
            borderDash: [5, 5]
          }
        ]
      }
    }
  });

  // Verificar puntos de cruce con el eje X y el eje Y
  var xCrossings = [];
  var yCrossings = [];

  if (a !== 0) {
    var xCrossing = -b / a;
    xCrossings.push(xCrossing);
  }

  var yCrossing = -b;
  yCrossings.push(yCrossing);

  var xCrossingsText = "Cruce en eje X: ";
  if (xCrossings.length === 0) {
    xCrossingsText += "Ninguno";
  } else {
    xCrossingsText += xCrossings.join(", ");
  }

  var yCrossingsText = "Cruce en eje Y: ";
  if (yCrossings.length === 0) {
    yCrossingsText += "Ninguno";
  } else {
    yCrossingsText += yCrossings.join(", ");
  }

  document.getElementById("zeros").innerHTML = `C°: {${xCrossing}}`
  document.getElementById("zeros").innerHTML = `Ordenada al origen: {0 ;${b}}`
  
  if(a<0){
    document.getElementById("idcre").innerHTML = "I.CRE: ∅"
    document.getElementById("iddecre").innerHTML = "I.DECRE: (-∞ ; +∞)"
  }else{
    document.getElementById("iddecre").innerHTML = "I.CRE:∅"
    document.getElementById("idcre").innerHTML = "I.DECRE: (+∞ ; -∞)"
  }
  
  if(a < 0){
    document.getElementById("image").innerHTML = "Imagen: (+∞ ; -∞)"
  }else{
    document.getElementById("image").innerHTML = "Imagen: (-∞ ; +∞)"
  }

  if(xCrossing < 0){
    document.getElementById("concre").innerHTML   = `C+: (${xCrossing} ; +∞)`
    document.getElementById("condecre").innerHTML = `C-: (-∞ ; ${xCrossing})`
  }else{
    document.getElementById("concre").innerHTML   = `C+: (-∞ ; ${xCrossing})`
    document.getElementById("condecre").innerHTML = `C-: (${xCrossing} ; +∞)`
  }

  document.getElementById("xCrossings").innerHTML = xCrossingsText;
  document.getElementById("yCrossings").innerHTML = yCrossingsText;
}

updateChart();