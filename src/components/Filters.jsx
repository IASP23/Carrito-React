import "./Filters.css";

export function Filters() {
  return (
    <section className="filters">
      <div>
        <label>Precio a partir de:</label>
        <input type="range" min="0" max="1000" />
      </div>

      <div>
        <label>Categoría</label>
        <select>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
