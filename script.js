// Datos (simulados) que usan las gráficas
const D = {
  Y: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  exp: [198, 222, 214, 277, 309, 364, 398, 426, 420, 480, 528],
  dn: ["Países Bajos", "EE. UU.", "España", "Reino Unido", "Chile"],
  dp: [34, 27, 18, 11, 10],
  rn: ["La Libertad", "Ica", "Lima", "Junín", "Áncash"],
  rp: [334, 185, 150, 106, 106],
  ry: [14.5, 12.0, 11.0, 8.5, 9.0],
  mes: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  est: [3, 2, 4, 9, 15, 18, 17, 12, 8, 5, 4, 3],
  vy: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  v: [10.5, -4.8, 27.5, 9.8, 16.1, 7.7, 5.7, -2.7, 12.5, 8.6]
};
Chart.defaults.animation=false;Chart.defaults.font.family='Segoe UI, Arial, sans-serif';
const C=['#3F9A2E','#FDB913','#0A96C8','#1F2D1B','#D64545'];const g=i=>document.getElementById(i);
g('c1')&&new Chart(g('c1'),{type:'line',data:{labels:D.Y,datasets:[{label:'Miles de toneladas',data:D.exp,borderColor:C[0],backgroundColor:'rgba(63,154,46,.15)',fill:true,tension:.3,borderWidth:3,pointBackgroundColor:C[1],pointRadius:5}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,title:{display:true,text:'Miles de toneladas exportadas'}}}}});
g('c2')&&new Chart(g('c2'),{type:'doughnut',data:{labels:D.dn,datasets:[{data:D.dp,backgroundColor:[C[0],C[1],C[2],C[3],'#9AA5A0']}]},options:{cutout:'58%'}});
g('c3')&&new Chart(g('c3'),{type:'bar',data:{labels:D.rn,datasets:[{data:D.rp,backgroundColor:C[0],borderRadius:6}]},options:{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{title:{display:true,text:'Producción 2025 (miles de toneladas)'}}}}});
g('c4')&&new Chart(g('c4'),{type:'bar',data:{labels:D.rn,datasets:[{data:D.ry,backgroundColor:C[1],borderRadius:6}]},options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,title:{display:true,text:'Rendimiento (t/ha)'}}}}});
g('c5')&&new Chart(g('c5'),{type:'bar',data:{labels:D.mes,datasets:[{data:D.est,backgroundColor:C[2],borderRadius:6}]},options:{plugins:{legend:{display:false}},scales:{y:{title:{display:true,text:'% de la cosecha anual'}}}}});
g('c6')&&new Chart(g('c6'),{type:'bar',data:{labels:D.vy,datasets:[{data:D.v,backgroundColor:D.v.map(x=>x<0?C[4]:C[0]),borderRadius:4}]},options:{plugins:{legend:{display:false}},scales:{y:{title:{display:true,text:'Variación anual de la producción (%)'}}}}});
