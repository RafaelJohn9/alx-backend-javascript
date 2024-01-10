declare module 	CRUD {
	function insertRow(row: RowElement): RowID;
	function updateRow(rowId: RowID, updateRow: RowElement): void;
	function deleteRow(rowId: RowID): void;
}
