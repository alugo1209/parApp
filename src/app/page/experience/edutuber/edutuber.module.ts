import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdutuberPageRoutingModule } from './edutuber-routing.module';

import { EdutuberPage } from './edutuber.page';
import { IframeVideoComponent } from 'src/app/components/iframe-video/iframe-video.component';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , IonicModule
    , EdutuberPageRoutingModule
    , IframeVideoComponent
  ],
  declarations: [EdutuberPage]
})
export class EdutuberPageModule {}
