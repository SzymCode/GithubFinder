$(document).ready((function(){var e;e=["search"],function o(n){if(n<e.length){const a=e[n];$.ajax({url:`${a}.html`,method:"GET",success:function(e){$("#app").append(e),console.log(`${n+1}. Template: ${a}.html has been loaded successfully!`),o(n+1)},error:function(){$("#app").append("<p>Error loading template.</p>"),console.log("Error loading template.")}})}}(0)}));