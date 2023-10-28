AFRAME.registerComponent("car", {
    schema:{
        rotationY:{ type: "number", default:1}
    },
    tick:function(){
        this.data.rotationY = this.data.rotationY + 0.6;
        var rotation = this.el.getAttribute("rotation");
        rotation.y = this.data.rotationY;
        this.el.setAttribute("rotation", {x: rotation.x, y: rotation.y, z: rotation.z});
    }
});