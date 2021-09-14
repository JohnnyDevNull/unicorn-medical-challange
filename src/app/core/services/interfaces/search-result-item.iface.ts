import { ISearchResultItemOwner } from './search-result-item-owner.iface';

export interface ISearchResultItem {
  tags: Array<string>;
  owner: ISearchResultItemOwner;
  is_answered: boolean;
  view_count: number;
  accepted_answer_id: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
  closed_date: number;
  closed_reason: string;
}
