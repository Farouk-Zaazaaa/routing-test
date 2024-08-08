import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MeComponent } from './me/me.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { UsComponent } from './us/us.component';

export const routes: Routes = [
    {path:"" , redirectTo : "home" , pathMatch: "full"},
    
    {path:"home" , component: HomeComponent},
    {path:"about" , component: AboutComponent , children: [
        {path: "me" , component: MeComponent},
        {path: "us" , component: UsComponent},
        {path: "whoweare" , component: WhoweareComponent}
    ]},
    {path:"contact" , component: ContactComponent},
    
    {path:"**" , component: HomeComponent},
];
