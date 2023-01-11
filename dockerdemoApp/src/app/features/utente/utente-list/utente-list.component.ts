import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from 'src/app/models/utente';
import { MatTableDataSource } from '@angular/material/table';
import { UtenteService } from 'src/app/services/utente.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-utente-list',
  templateUrl: './utente-list.component.html',
  styleUrls: ['./utente-list.component.css']
})
export class UtenteListComponent {
  constructor(private utenteService: UtenteService, private router: Router,  private route: ActivatedRoute) {}
  dataSource: MatTableDataSource<Utente> = new MatTableDataSource<Utente>();
  displayedColumns: string[] = ['id', 'nome', 'cognome'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  urlSearchOperationFlag: string | null = ""

  ngOnInit(): void {
   this.getData();
  }

  getData() {
    this.utenteService.getUtenti().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  resetDataSource() {
    this.getData();
    this.urlSearchOperationFlag = "";
  }

}
