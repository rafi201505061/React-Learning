export class Route {
  constructor({ path = "/", element = null, children = [] }) {
    this.path = path;
    this.element = element;
    this.children = children;
  }
}
