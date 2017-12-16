<li class="dropdown"><a href="{dede:field name='typeurl'/}">{dede:field name='typename' /}</a>
		  <a href="{dede:field name='typeurl'/}" id="app_menudown" style="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
            <ul class="dropdown-menu nav_small" role="menu">
              {dede:channel type='son' noself='yes'}
			  <li><a href="[field:typelink/]">[field:typename/]</a></li>
              {/dede:channel} 
            </ul>
          </li>