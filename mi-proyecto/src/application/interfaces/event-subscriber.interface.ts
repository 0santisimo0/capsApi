export interface EventSubscriber<TEvent> {
    handle(event: TEvent): Promise<void>;
  }