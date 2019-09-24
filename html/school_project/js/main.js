var theme_active_background = "#aeaeae";
var theme_active_color = "#CEE87C";
var active_tab = null;
var local_active_tab = null;
var array_of_content_items = new Array();
var array_of_local_acters = new Array();

setTimeout( function(){ robot(); }, 1 );

function open_tab( i )
{
        if( active_tab === i )
        {
                close_tab( active_tab );
                return 0;
        }

        else if( active_tab != null )
        {
                close_tab( active_tab );
        }

        active_tab = i;
        _parent = i.parentNode;

        _parent.style.background = theme_active_background;
        i.style.color = theme_active_color;
        i.getElementsByClassName('svg')[0].style.transform = "rotate( 90deg )";

        for( let a = 0; a < array_of_content_items.length; a++ )
        {
                if( array_of_content_items[a].object === i )
                {
                        _parent.style.height = array_of_content_items[a].height + "px";
                }
        }
        setTimeout( function(){ _parent.style.height = "auto"; }, 700 );
}

function open_acters_tab( i )
{
        if( i === local_active_tab )
        {
                close_tab( local_active_tab );
                return false;
        }
        
        else 
        {
                let _parent = i.parentNode;
                local_active_tab = i;

                i.getElementsByClassName('svg')[0].style.transform = "rotate( 90deg )";
                i.style.background = theme_active_background;

                for( let a = 0; a < array_of_local_acters.length; a++ )
                {
                        if( array_of_local_acters[a].object === i )
                        {
                                _parent.style.height = array_of_local_acters[a].height + "px";
                        }
                }

                setTimeout( function(){ _parent.style.height = "auto" }, 500 );

        }
}

function close_tab( i )
{
        let _parent = i.parentNode;
        let _offset = _parent.offsetHeight;

        _parent.style.background = null;
        i.style.color = null;
        i.getElementsByClassName('svg')[0].style.transform = "rotate( 0deg )";
        _parent.style.transition = "none";

        _parent.style.height = _offset + "px";
        
        let interval = setInterval( function(){
                
                if( _parent.style.height <= "10px" )
                {
                        if( _parent.className == "local-acters" )
                        {
                                _parent.style.height = "1.2rem";
                        }

                        else 
                        {
                                _parent.style.height = "1.6rem";
                        }
                        _parent.style.transition = ".7s all";
                        clearInterval( interval );
                }
                
                else 
                {
                        _parent.style.height = (_offset -= 8) + "px";
                }

        }, 5 );

        if( _parent.className != "local-acters" )
        {
                _parent.getElementsByClassName('local-acters')[0].style.height = "1.1rem";
                active_tab = null;
        }

        else if( _parent.className == "local-acters" )
        {
                local_active_tab = null;
        }
}

function robot()
{
        let elements = document.getElementsByClassName('content-item');
        let length = elements.length;

        let local_elements = document.getElementsByClassName('local-acters');
        let local_length = local_elements.length;
        
        for( let i = 0; i < length; i++ )
        {
                elements[i].style.height = "auto";

                array_of_content_items[i] = {
                        height: elements[i].offsetHeight,
                        object: elements[i].getElementsByClassName('content-controls')[0],
                };

                elements[i].style.height = "1.6rem";
                elements[i].style.transition = ".5s";
        }

        for( let i = 0; i < local_length; i++ )
        {
                local_elements[i].style.height = "auto";

                array_of_local_acters[i] = {
                        height: local_elements[i].offsetHeight,
                        object: local_elements[i].getElementsByClassName('content-controls')[0],
                }

                local_elements[i].style.height = "1.1rem";
                local_elements[i].style.transition = "all .5s";
        }
}
