export class Cells
{
    "x": number;
    "y": number;
    "locked": boolean;
    "obstacle": boolean;
    "unit": boolean;
    "poi": boolean;

     constructor(x, y, locked, obstacle, unit, poi) {
        this.x = x;
        this.y = y;
        this.locked = locked;
        this.obstacle = obstacle;
        this.unit = unit;
        this.poi = poi;
     }
}