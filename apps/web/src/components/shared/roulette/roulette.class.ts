import { IRouletteItem } from "@/types";

export class RouletteReel {
  private items: IRouletteItem[];
  private winner: IRouletteItem;
  private spinsCount: number;
  private itemHeight: number;
  private itemGap: number;
  private containerHeight: number;

  constructor(
    items: IRouletteItem[],
    winner: IRouletteItem,
    spinsCount: number,
    itemHeight: number,
    itemGap: number,
    containerHeight: number
  ) {
    this.items = items;
    this.winner = winner;
    this.spinsCount = spinsCount;
    this.itemHeight = itemHeight;
    this.itemGap = itemGap;
    this.containerHeight = containerHeight;
  }

  private shuffleItems(items: IRouletteItem[]): IRouletteItem[] {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  public prepareItems(): IRouletteItem[] {
    // Создаем базовый набор элементов
    const baseItems = [...this.items];

    // Перемешиваем все элементы
    const shuffledItems = this.shuffleItems(baseItems);

    // Создаем массив с повторяющимися элементами
    const repeatedItems = Array(this.spinsCount * 2)
      .fill(shuffledItems)
      .flat();

    // Находим позицию, где должен быть победный элемент
    const targetPosition = this.spinsCount * this.items.length;

    // Заменяем элемент в целевой позиции на победный
    repeatedItems[targetPosition] = this.winner;

    return repeatedItems;
  }

  public calculateTargetPosition(): number {
    // Вычисляем позицию, где должен остановиться победный элемент
    const targetPosition =
      this.spinsCount * this.items.length * (this.itemHeight + this.itemGap) -
      this.containerHeight / 2 +
      (this.itemHeight + this.itemGap) / 2;

    return targetPosition;
  }

  public getWinner(): IRouletteItem {
    return this.winner;
  }
}
