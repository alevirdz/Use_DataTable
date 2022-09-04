//Configaración de la petición
const uri = 'http://localhost:8888/Datatables/datasExample.js';
const nameIDTable = '#solicitud';
const queryAllPaperworkRequests = async () => {
    const promise = await axios.get(uri)
    return promise.data
}

//Acciones
queryAllPaperworkRequests()
    .then(data => {
        const arrObjResponseRequests = data;
        moduleTable(arrObjResponseRequests);
    })
    .catch(err => console.log(err))

//Datos para llenar la tabla
let controlRequests;
const moduleTable = (_arrObjResponseRequests) => {
    controlRequests = new DataTable(nameIDTable, {
        data: _arrObjResponseRequests,
        configuration: configurationDefault,
        language: languageSpanish,
        lengthMenu: lengthMenu,
        dom: 'Blfrtip',
        buttons: configurationButtons([1, 2, 3, 4], ['PRINT', 'EXCEL', 'PDF']),
        dataSrc: '',
        columns: [
            {
                data: 'id',
                checkboxes: {
                    orderable: false,
                    selectRow: true
                }
            },
            { data: 'id' },
            { data: 'name' },
            { data: 'username' },
            { data: 'email' },
            { defaultContent: buttonControlsPublic },

        ],
        select: {
            style: 'multi'
        }
    });

    //Método que pasa parametros relacionados a la tabla
    buttonDeleteItem(nameIDTable + ' tbody', controlRequests);
    buttonModifyItem(nameIDTable + ' tbody', controlRequests);
}
//Checkbox Multiple
$(nameIDTable).on('change', 'input.dt-checkboxes', function () {
    let seletedOneCheck = document.querySelector('input.dt-checkboxes[type=checkbox]').checked;
    console.log(seletedOneCheck);
    document.getElementById("checksTable").disabled = false;
    seletedOneCheck == false ? document.getElementById("checksTable").disabled = true : '';
});
$(nameIDTable).on('change', 'input[type=checkbox]', function () {
    let selectedAllCheck = document.querySelector('input[type=checkbox]').checked;
    selectedAllCheck == false ? document.getElementById("checksTable").disabled = true : document.getElementById("checksTable").disabled = false;

});

let buttonSelectedCheck = document.getElementById("checksTable");
buttonSelectedCheck.addEventListener("click", () => {
    let checks = controlRequests.column(0).checkboxes.selected();
    let collectionIDs = [];
    Array.prototype.forEach.call(checks, (_ID) => {
        collectionIDs.push(_ID);
    });
    if (collectionIDs == '') {
        alert("No hay nada seleccionado");
    } else {
        console.log("Ha dado click en los checkbox");
        alert("¿Qué hacemos?" + collectionIDs);
    }

});


//Controles del módulo
let buttonDeleteItem = (tbody, table) => {
    $(tbody).on('click', 'button.eliminar', function () {
        const getFirstTd = table.row($(this).parents("tr")).data();
        //Proceso de información
        methodRequest('D', getFirstTd.id, 0) //0: sin parametro
    })
}

let buttonModifyItem = (tbody, table) => {
    $(tbody).on('click', 'button.Editar', function () {
        const getFirstTd = table.row($(this).parents("tr")).data();
        //Genera JSON
        const objDataFields = {
            folio: "123123",
            nombre: "Alevi"
        }
        //Proceso de información
        methodRequest('M', getFirstTd, objDataFields)
    })
}

//Verifica el tipo de acción
const methodRequest = (_action, _getFirstTd, _objDataFields) => {
    const options = {
        'D': methodDelete,
        'M': methodModify,
        'A': methodUpdate,
    }
    return (options[_action])(_getFirstTd, _objDataFields);
}


const methodModify = (_getFirstTd, _objDataFields) => {
    const defineRoute = '/TheRoute';
    const iIdElement = _getFirstTd;
    const collection = _objDataFields;
    const addParams = new FormData();
    addParams.append("iId", iIdElement);

    collection !== 0 ? (
        Object.entries(collection).forEach(([key, value]) => {
            // console.log(key + ':' +value)
            addParams.append(key, value);
        })) : ('');

    axios.post(defineRoute, addParams)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        })
}


const methodUpdate = (_getFirstTd, _objDataFields) => {
    const collection = _objDataFields;
    collection === 0 ? (alert("Actualizo")) : ('');
}

const methodDelete = (_getFirstTd, _objDataFields) => {
    const collection = _objDataFields;
    collection === 0 ? (alert("ID: " + _getFirstTd)) : ('');

}