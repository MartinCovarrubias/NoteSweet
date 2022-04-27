import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _cargarScripts:CargarScriptsService) {
    _cargarScripts.carga("./assets/vendor/jquery/jquery.min.js");
    _cargarScripts.carga("./assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
    _cargarScripts.carga("./assets/vendor/jquery-easing/jquery.easing.min.js");
    _cargarScripts.carga("./assets/js/sb-admin-2.min.js");
   }

  ngOnInit(): void {
  }

}
