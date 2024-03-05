import { ListAdvanceUser } from './listAdvanceUser';
import { Module } from './module';
import { TopicsCourse } from './topicsCourse';
export class ModuleDetail {
  module!: Module;
  enro_Id!: number; 
  topicsCourse: Array<TopicsCourse> = [];
  listAdvanceUser: Array<ListAdvanceUser> = [];
  listAttempts: Array<any> = [];
  userTopicsAdvances: Array<any> = [];
}