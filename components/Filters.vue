<template>
    <div class="container">
        <div class="field">
            <label class="label">Categorías</label> 
            <div class="select">
                <select>
                    <option>Tecnologia</option>
                    <option>Ciencia</option>
                    <option>Enseñanza</option>
                </select>
            </div>
        </div>
        <div class="field">
            <label class="label">Horas de servicio</label> 
            <div class="select">
                <select>
                    <option>60 horas</option>
                    <option>80 horas</option>
                    <option>100 horas</option>
                    <option>120 horas</option>
                </select>
            </div>
        </div>
        <div class="field">
            <label class="label">Lugar</label> 
            <div class="select">
                <select>
                    <option>Campus Monterrey</option>
                    <option>Monterrey</option>
                    <option>Guadalupe</option>
                    <option>San Pedro</option>
                    <option>San Nicolás</option>
                </select>
            </div>
        </div>
        <div class="field">
            <label class="label">Horario</label> 
            <div class="select">
                <select>
                    <option>10:00 a.m.</option>
                    <option>11:00 a.m.</option>
                    <option>12:00 p.m.</option>
                    <option>1:00 p.m.</option>
                </select>
            </div>
        </div>
        <div class="field">
            <label class="label">Tareas</label> 
            <div class="select">
                <select>
                    <option>Clases</option>
                    <option>Programación</option>
                    <option>Talleres</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Filters',
    
    data() {
        return {
        }
    },
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;
        margin-top: 38px;
    }
    .select{
        margin-bottom: 12px;
        min-width: 192px;
    }
    select{
        min-width: 192px;
    }
    .label{
        color: hsl(0, 0%, 50%)
    }
</style>