import ProductsPagestyles from "./ProductsPage.module.css";

const Filters = ({ category, setCategory, order, setOrder }) => {
  return (
    <aside>
      <h3>Filtros</h3>

      <label>
        Categoría
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={ProductsPagestyles.filters}
        >
          <option value="all">Todas</option>
          <option value="gpu">GPU</option>
          <option value="cpu">CPU</option>
          <option value="ram">RAM</option>
          <option value="storage">Almacenamiento</option>
          <option value="motherboard">Motherboard</option>
          <option value="psu">Fuente</option>
          <option value="case">Gabinete</option>
          <option value="monitor">Monitor</option>
          <option value="perifericos">Periféricos</option>
        </select>
      </label>

      <label>
        Ordenar por
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className={ProductsPagestyles.filters}
        >
          <option value="default">Relevancia</option>
          <option value="price-asc">Menor precio</option>
          <option value="price-desc">Mayor precio</option>
        </select>
      </label>
    </aside>
  );
};

export default Filters;
