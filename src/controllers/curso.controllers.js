import { getConnection, querys, sql } from "../database";


//mostrar campos
export const getCurso = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllcurso);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//crear campo
export const createNewCurs = async (req, res) => {
  const { nombrecurso,idgrado,idcarrera,catedratico } = req.body;
  let {  } = req.body;

  // validating
  if (nombrecurso == null)  {
    return res.status(400).json({ msg: "Campos Incompletos!" });
  }
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("catedratico", sql.VarChar, catedratico)
      .input("idcarrera", sql.VarChar, idcarrera)
      .input("idgrado", sql.VarChar, idgrado)
      .input("nombrecurso", sql.VarChar, nombrecurso)
      .query(querys.addNewCurs, );getCursById

    res.json({ nombrecurso,idgrado,idcarrera,catedratico  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//consultar campo por ID
export const getCursById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id_curso", req.params.Id_curso)
      .query(querys.getCursById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar campo por ID
export const deleteCursById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id_curso", req.params.Id_curso)
      .query(querys.deleteCurs);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Mostrar el total de campo
export const getTotalCurso = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalcurso);
  console.log(result);
  res.json(result.recordset[0][""]);
};

//Actualizar el campo
export const updateCursById = async (req, res) => {
  const { nombrecurso, idgrado, idcarrera, catedratico } = req.body;

  // validating
  if (nombrecurso == null
    ) {
    return res.status(400).json({ msg: "Campos Incompletos" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("catedratico", sql.VarChar, catedratico)
      .input("idcarrera", sql.VarChar, idcarrera)
      .input("idgrado", sql.VarChar, idgrado)
      .input("nombrecurso", sql.VarChar, nombrecurso)
      .input("Id_curso", req.params.Id_curso)
      .query(querys.updateCursById);
    res.json({nombrecurso,idgrado,idcarrera,catedratico });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};