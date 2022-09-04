<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="datatables/datatables.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/v/dt/dt-1.10.16/sl-1.2.5/datatables.min.css">
    <link type="text/css" href="//gyrocode.github.io/jquery-datatables-checkboxes/1.2.12/css/dataTables.checkboxes.css" rel="stylesheet" />
    <title>Guia tables</title>
  </head>
  <body>
    <div class="container mt-5">
    <div class="row">
        <div class="col">
        <button class="btn btn-primary" id="checksTable" disabled>Opciones</button>
        <div class="card">
            <div class="mb-3 p-3 table-responsive">
            <table class="table" id="solicitud">
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Posicion</th>
                        <th>Trabajo</th>
                        <th>Controles</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Posicion</th>
                        <th>Trabajo</th>
                        <th>Controles</th>
                    </tr>
                </tfoot>
            </table>
            </div>
        </div>
        </div>
    </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="datatables/datatables.min.js"></script>
    <script src="configTable.js"></script>
    <script src="datasExample.js"></script>
    <script src="tableInformation.js"></script>
    <script src="datatables/buttons/dataTablesButtons_01.min.js"></script>
    <script src="datatables/buttons/dataTablesButtonHTML5.min.js"></script>
    <script src="datatables/buttons/dataTablesButtonPrint.min.js"></script>
    <script src="datatables/buttons/dataTablesJSZip.min.js"></script>
    <script src="datatables/buttons/dataTablesPdfMake.min.js"></script>
    <script src="datatables/buttons/dataTablesPdfMakeFonts.min.js"></script>
    <script type="text/javascript" src="//gyrocode.github.io/jquery-datatables-checkboxes/1.2.12/js/dataTables.checkboxes.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA=" crossorigin="anonymous"></script>
  </body>
</html>
<style>
    table.dataTable.table thead th.sorting:after, table.dataTable.table thead td.sorting:after{
    content: "" !important;
    color: #ddd;
    font-size: 0.8em;
    }
    table.dataTable.table thead th.sorting_asc:after, table.dataTable.table thead td.sorting_asc:after{
        content: "" !important; 
    }
</style>