function redirecionar_gleba(tipo_grafico, gleba) {

    var frame = document.getElementById('frame_change')

  if (tipo_grafico == "temp" && gleba == "oeste") {

      frame.src = '../dashboard/iframes/graph_frame_temp.html';

  } else if (tipo_grafico == "umid" && gleba == "oeste") {

      frame.src = '../dashboard/iframes/graph_frame_umid.html';

  } else if (tipo_grafico == "temp" && gleba == "sul") {

      frame.src = '../dashboard/iframes/graph_frame_temp.html';

  } else if (tipo_grafico == "umid" && gleba == "sul") {

      frame.src = '../dashboard/iframes/graph_frame_umid.html';

  } else if ((tipo_grafico == "temp", gleba == "leste")) {

      frame.src = '../dashboard/iframes/graph_frame_temp.html';

  } else if ((tipo_grafico == "umid", gleba == "leste")) {

      frame.src = '../dashboard/iframes/graph_frame_umid.html';

  } else if (tipo_grafico == "temp" && gleba == "norte") {

      frame.src = '../dashboard/iframes/graph_frame_temp.html';

  } else if (tipo_grafico == "umid" && gleba == "norte") {

      frame.src = '../dashboard/iframes/graph_frame_umid.html';

  }
}
