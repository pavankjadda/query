import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'query-todos-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosPageComponent {
  todosResult = inject(TodosService).getTodos();
  todos = this.todosResult.result;
}
