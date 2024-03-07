import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencePageRoutingModule } from './experience-routing.module';

import { ExperiencePage } from './experience.page';
import { EdutuberVideosComponent } from 'src/app/components/edutuber-videos/edutuber-videos.component';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , IonicModule
    , ExperiencePageRoutingModule
    , EdutuberVideosComponent
  ],
  declarations: [ExperiencePage]
})
export class ExperiencePageModule {}
