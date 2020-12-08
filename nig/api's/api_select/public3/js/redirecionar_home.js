  
function redirecionar_gleba(tipo_grafico, gleba ) {

var frame = document.getElementById('frame_change')

  if (tipo_grafico == "temp" && gleba == "oeste") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_temp.html';
      
      home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-red.png";
    graph_icon_umid.src = "../images/chart-umid-green.png";
    help_icon.src = "../images/help-green.png";

  
  } else if (tipo_grafico == "umid" && gleba == "oeste") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_umid.html';
    
    home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-green.png";
    graph_icon_umid.src = "../images/chart-umid-red.png";
    help_icon.src = "../images/help-green.png";
  
  } else if (tipo_grafico == "temp" && gleba == "sul") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_temp.html';
          
          home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-red.png";
    graph_icon_umid.src = "../images/chart-umid-green.png";
    help_icon.src = "../images/help-green.png";
  
  } else if (tipo_grafico == "umid" && gleba == "sul") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_umid.html';
    
    home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-green.png";
    graph_icon_umid.src = "../images/chart-umid-red.png";
    help_icon.src = "../images/help-green.png";
  
  } else if (tipo_grafico == "temp", gleba == "leste") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_temp.html';
      
    
    home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-green.png";
    graph_icon_umid.src = "../images/chart-umid-red.png";
    help_icon.src = "../images/help-green.png";
  
  } else if (tipo_grafico == "umid", gleba == "leste") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_umid.html';
        
        home_icon.src = "../images/home-icon.png";
        graph_icon.src = "../images/chart-temp-green.png";
        graph_icon_umid.src = "../images/chart-umid-red.png";
        help_icon.src = "../images/help-green.png";
  
  } else if (tipo_grafico == "temp" && gleba == "norte") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_temp.html';
      
      home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-red.png";
    graph_icon_umid.src = "../images/chart-umid-green.png";
    help_icon.src = "../images/help-green.png";

  
  } else if (tipo_grafico == "umid" && gleba == "norte") {
    
      home_index.classList.remove("home_index_block");
      home_index.classList.add("home_index_none")
      
      frame.src = '../dashboard/iframes/graph_frame_umid.html';
    
    home_icon.src = "../images/home-icon.png";
    graph_icon.src = "../images/chart-temp-green.png";
    graph_icon_umid.src = "../images/chart-umid-red.png";
    help_icon.src = "../images/help-green.png";
  }
}
