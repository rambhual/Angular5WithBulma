import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ContactComponent } from "./contact/contact.component";
import { AddContactComponent } from "./contact/add-contact/add-contact.component";
import { EmployeeComponent } from "./employee/employee.component";
import {
  TrainingComponent,
  CategoryComponent,
  HistoryComponent,
  NeedComponent,
  CampaignComponent
} from "./index";

export const SaintGobaonRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "category" },
  { path: "category", component: CategoryComponent },
  { path: "training", component: TrainingComponent },
  { path: "history", component: HistoryComponent },
  { path: "need", component: NeedComponent },
  { path: "campaign", component: CampaignComponent },
  { path: "addContact", component: AddContactComponent },
  { path: "contact", component: ContactComponent },
  { path: "employees", component: EmployeeComponent }
];
