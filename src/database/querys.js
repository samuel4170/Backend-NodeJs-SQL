
export const querys = {
        //Get (muestra todos los campos)
        getAllcurso: "SELECT * FROM [Crudnode].[dbo].[curso]",
        //muestra los registros por ID como parametro
        getCursById: "SELECT * FROM curso Where Id_curso = @Id_curso",
        //Agreamos nuevo campo a la db
        addNewCurs:"INSERT INTO [Crudnode].[dbo].[curso] (nombrecurso,idgrado,idcarrera,catedratico) VALUES (@nombrecurso,@idgrado,@idcarrera,@catedratico);",
        //eliminar un campo
        deleteCurs: "DELETE FROM [Crudnode].[dbo].[curso] WHERE Id_curso= @Id_curso",
        //contabilizar los campos
        getTotalcurso: "SELECT COUNT(*) FROM Crudnode.dbo.curso",
        //actualizar un campo por su id
        updateCursById:"UPDATE [Crudnode].[dbo].[curso] SET nombrecurso = @nombrecurso, idgrado = @idgrado, idcarrera = @idcarrera, catedratico = @catedratico WHERE Id_curso = @Id_curso",
}
