body { font-family: sans-serif; margin:0; padding:20px; background:#f4f4f9; }
h1 { text-align:center; margin-bottom:20px; }
#grid-wrap { display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:12px; max-width:1200px; margin:auto; }

.course-card {
  background:#fff;
  padding:16px;
  border-radius:12px;
  cursor:pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border-left: 8px solid #0077cc;
}
.course-card:hover {
  transform:translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.course-card .title { font-weight:700; color:#0077cc; margin-bottom:6px; }
.course-card .code { font-size:0.9em; color:#555; }

#modal.hidden { display:none; }
#modal {
  position:fixed; top:0; left:0; width:100%; height:100%;
  background:rgba(0,0,0,0.5); display:flex;
  justify-content:center; align-items:center;
}
.modal-content {
  background:#fff; padding:20px; border-radius:8px;
  max-width:90%; width:400px; position:relative;
}
#modal-close {
  position:absolute; top:8px; right:12px;
  font-size:20px; cursor:pointer;
}
