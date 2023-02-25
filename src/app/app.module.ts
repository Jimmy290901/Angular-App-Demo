import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { AppServers } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { Highlight } from './highlight/highlight.directive';
import { DisplayBlueprint } from './displayBlueprints/displayBlueprints.directive';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.services';

const routes: Routes = [
  {path: "new", component: CockpitComponent},
  {path: ":type", component: AppServers}
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AppServers,
    CockpitComponent,
    Highlight,
    DisplayBlueprint
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
