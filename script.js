fetch('data.json').then(r=>r.json()).then(courses=>{
  const wrap = document.getElementById('grid-wrap');
  courses.forEach(c=>{
    const el = document.createElement('div');
    el.className='course-card';
    el.innerHTML=`
      <div class="title">${c.nombre}</div>
      <div class="code">${c.codigo} · Sem ${c.semestre}</div>
    `;
    el.addEventListener('click', () => openModal(c));
    wrap.appendChild(el);
  });
});

function openModal(c) {
  document.getElementById('modal-body').innerHTML = `
    <h2>${c.nombre}</h2>
    <p><strong>Código:</strong> ${c.codigo}</p>
    <p><strong>Semestre:</strong> ${c.semestre}</p>
    <p><strong>Créditos:</strong> ${c.creditos}</p>
    <p><strong>Horas:</strong> ${c.horas}</p>
    ${c.prerequisitos ? `<p><strong>Prerreq:</strong> ${c.prerequisitos}</p>` : ''}
  `;
  document.getElementById('modal').classList.remove('hidden');
}
document.getElementById('modal-close').onclick = () => {
  document.getElementById('modal').classList.add('hidden');
};
