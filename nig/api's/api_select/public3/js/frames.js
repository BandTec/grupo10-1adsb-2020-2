function change_frame(local) {

    frame = document.getElementById('frame_change')

    if (local == 'home'){
    frame.src = '../dashboard/iframes/index_frame.html'
        
        // ALTERAR IFRAMES
        
        home.classList.add('atual')
        graph.classList.remove('atual')
        config.classList.remove('atual')
        help.classList.remove('atual')
        
        // ALTERAR ICONES SELECIONADOS
        home_icon.src = '../images/home-icon-red.png';
        graph_icon.src = '../images/chart-green.png';
        sett_icon.src = '../images/settings-green.png';
        help_icon.src = '../images/help-green.png';    
    } else if (local == 'graph'){
    frame.src = '../dashboard/iframes/graph_frame.html'
        
        // ALTERAR IFRAMES
        
        home.classList.remove('atual')
        graph.classList.add('atual')
        config.classList.remove('atual')
        help.classList.remove('atual')
        
        // ALTERAR ICONES SELECIONADOS
        home_icon.src = '../images/home-icon.png';
        graph_icon.src = '../images/chart-red.png';
        sett_icon.src = '../images/settings-green.png';
        help_icon.src = '../images/help-green.png';    
    } else if (local == 'config'){
    frame.src = '../dashboard/iframes/config_frame.html'
        
        // ALTERAR IFRAMES
        
        home.classList.remove('atual')
        graph.classList.remove('atual')
        config.classList.add('atual')
        help.classList.remove('atual')
        
        // ALTERAR ICONES SELECIONADOS
        home_icon.src = '../images/home-icon.png';
        graph_icon.src = '../images/chart-green.png';
        sett_icon.src = '../images/settings-red.png';
        help_icon.src = '../images/help-green.png';    
    } else if (local == 'help'){
    frame.src = '../dashboard/iframes/help_frame.html'
        
        // ALTERAR IFRAMES
        
        home.classList.remove('atual')
        graph.classList.remove('atual')
        config.classList.remove('atual')
        help.classList.add('atual')
        
        // ALTERAR ICONES SELECIONADOS
        home_icon.src = '../images/home-icon.png';
        graph_icon.src = '../images/chart-green.png';
        sett_icon.src = '../images/settings-green.png';
        help_icon.src = '../images/help-red.png';    
    } else {
        console.error('erro inesperado');
    }
}