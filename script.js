fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('malla-container');
    data.forEach(curso => {
      const div = document.createElement('div');
      div.className = 'curso';
      div.innerHTML = `<strong>${curso.nombre}</strong><br>
                       Código: ${curso.codigo}<br>
                       Semestre: ${curso.semestre}<br>
                       Créditos: ${curso.creditos}<br>
                       Horas: ${curso.horas}<br>
                       ${curso.prerequisitos ? '<em>Prerrequisitos: ' + curso.prerequisitos + '</em>' : ''}`;
      container.appendChild(div);
    });
  });
