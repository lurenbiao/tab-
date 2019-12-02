<script>
class Tab {
    constructor(itemClass, eventType, itemActiveClass, contentClass, contentShowClass) {
      this.itemClass = itemClass || '';
      this.eventType = eventType || '';
      this.itemActiveClass = itemActiveClass || '';
      this.contentClass = contentClass || '';
      this.contentShowClass = contentShowClass || '';
      this.items = document.querySelectorAll(this.itemClass);
      this.contetns = document.querySelectorAll(this.contentClass);
      this.addEvent();
    }
    addEvent() {

      this.items.forEach((e, i) => {
        e.addEventListener(this.eventType, (e) => {
          let target = e.target;

          this.changeItems(target);

          this.changeContent(i);
        })
      })
    }
    changeItems(current) {
      this.items.forEach(e => {
        e.classList.remove(this.itemActiveClass);
      })
      current.classList.add(this.itemActiveClass);
    }
    changeContent(index) {
      this.contetns.forEach(e => {
        e.classList.remove(this.contentShowClass);
      })
      this.contetns[index].classList.add(this.contentShowClass);
    }
  }
  let tab = new Tab();
</script>