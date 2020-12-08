function change_frame(local) {
  frame = document.getElementById("frame_change");

  if (local == "home") {
    
    frame.src = "../dashboard/dash.html";

    // ALTERAR IFRAMES

    home_index.classList.add("home_index_block");
    home_index.classList.remove("home_index_none")
    
    graph.classList.remove("atual");
    graph_umid.classList.remove("atual");

    help.classList.remove("atual");

    // ALTERAR ICONES SELECIONADOS
    home_icon.src = "../images/home-icon-red.png";
    graph_icon.src = "../images/chart-temp-green.png";
    graph_icon_umid.src = "../images/chart-umid-green.png";
    help_icon.src = "../images/help-green.png";
    
  } else if (local == "graph_umid") {
    
    frame.src = "../dashboard/iframes/graph_frame_umid.html";

    // ALTERAR IFRAMES

    home_index.classList.remove("home_index_block");
    home_index.classList.add("home_index_none")
    
    graph.classList.remove("atual");
    graph_umid.classList.add("atual");

    help.classList.remove("atual");

    // ALTERAR ICONES SELECIONADOS
    home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-green.png";
    graph_icon_umid.src = "../images/chart-umid-red.png";
    help_icon.src = "../images/help-green.png";
    
  } else if (local == "graph") {
    
    frame.src = "../dashboard/iframes/graph_frame_temp.html";

    // ALTERAR IFRAMES

    home_index.classList.remove("home_index_block");
    home_index.classList.add("home_index_none")
    
    graph.classList.add("atual");
    graph_umid.classList.remove("atual");

    help.classList.remove("atual");

    // ALTERAR ICONES SELECIONADOS
    home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-red.png";
    graph_icon_umid.src = "../images/chart-umid-green.png";
    help_icon.src = "../images/help-green.png";
    
  } else if (local == "help") {
    
    frame.src = "../dashboard/iframes/help_frame.html";

    // ALTERAR IFRAMES

    home_index.classList.remove("home_index_block");
    home_index.classList.add("home_index_none")
    
    graph.classList.remove("atual");
    graph_umid.classList.remove("atual");

    help.classList.add("atual");

    // ALTERAR ICONES SELECIONADOS
    home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-green.png";
    graph_icon_umid.src = "../images/chart-umid-green.png";
    help_icon.src = "../images/help-red.png";
  } else {
    console.error("erro inesperado");
  }
}
