//Initial g3 code for all the languages in the sample object data taken from 

<!DOCTYPE html>
<head>
<style>svg {
  background-color:gray;
}</style>
    <script src="https://d3js.org/d3.v4.min.js"></script>
</head>
<body>
    <svg></svg>
    <script>// Variables
    var width = 600;
    var height = 600;
    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemeCategory20b);

  let data={"ActionScript":125,"C":5823,"C#":4037,"C++":6446,"Clojure":885,"CoffeeScript":718,"CSS":2950,"Go":5919,"Haskell":581,"HTML":3803,"Java":13711,"JavaScript":29947,"Lua":623,"MATLAB":199,"Objective-C":6142,"Perl":440,"PHP":6339,"Python":16752,"R":578,"Ruby":5830,"Scala":1105,"Shell":3360,"Swift":3445,"TeX":372,"Vim script":881,"1C Enterprise":5,"ABAP":6,"ABNF":0,"Ada":5,"Adobe Font Metrics":0,"Agda":7,"AGS Script":6,"Alloy":0,"Alpine Abuild":0,"AMPL":0,"AngelScript":1,"Ant Build System":0,"ANTLR":3,"ApacheConf":21,"Apex":15,"API Blueprint":2,"APL":1,"Apollo Guidance Computer":0,"AppleScript":32,"Arc":3,"AsciiDoc":1,"ASN.1":0,"ASP":17,"AspectJ":1,"Assembly":140,"ATS":2,"Augeas":1,"AutoHotkey":34,"AutoIt":11,"Awk":13,"Ballerina":0,"Batchfile":63,"Befunge":0,"Bison":1,"BitBake":9,"Blade":0,"BlitzBasic":0,"BlitzMax":0,"Bluespec":0,"Boo":0,"Brainfuck":6,"Brightscript":0,"Bro":5,"C-ObjDump":0,"C2hs Haskell":0,"Cap'n Proto":0,"CartoCSS":5,"Ceylon":0,"Chapel":1,"Charity":0,"ChucK":2,"Cirru":2,"Clarion":0,"Clean":0,"Click":0,"CLIPS":0,"Closure Templates":0,"Cloud Firestore Security Rules":0,"CMake":71,"COBOL":4,"ColdFusion":12,"ColdFusion CFC":0,"COLLADA":0,"Common Lisp":123,"Common Workflow Language":1,"Component Pascal":0,"CoNLL-U":0,"Cool":0,"Coq":18,"Cpp-ObjDump":0,"Creole":0,"Crystal":51,"CSON":0,"Csound":0,"Csound Document":1,"Csound Score":0,"CSV":0,"Cuda":50,"CWeb":1,"Cycript":2,"Cython":0,"D":59,"D-ObjDump":0,"Darcs Patch":0,"Dart":285,"DataWeave":0,"desktop":0,"Diff":0,"DIGITAL Command Language":4,"DM":4,"DNS Zone":0,"Dockerfile":184,"Dogescript":0,"DTrace":1,"Dylan":1,"E":1,"Eagle":39,"Easybuild":0,"EBNF":0,"eC":1,"Ecere Projects":0,"ECL":0,"ECLiPSe":0,"Edje Data Collection":0,"edn":0,"Eiffel":0,"EJS":0,"Elixir":460,"Elm":107,"Emacs Lisp":550,"EmberScript":0,"EML":0,"EQ":0,"Erlang":329,"F#":112,"F*":2,"Factor":1,"Fancy":1,"Fantom":0,"FIGlet Font":0,"Filebench WML":0,"Filterscript":0,"fish":0,"FLUX":0,"Formatted":0,"Forth":6,"Fortran":24,"FreeMarker":15,"Frege":1,"G-code":0,"Game Maker Language":1,"GAMS":0,"GAP":1,"GCC Machine Description":10,"GDB":0,"GDScript":19,"Genie":0,"Genshi":0,"Gentoo Ebuild":0,"Gentoo Eclass":0,"Gerber Image":0,"Gettext Catalog":0,"Gherkin":16,"GLSL":43,"Glyph":0,"Glyph Bitmap Distribution Format":0,"GN":0,"Gnuplot":3,"Golo":0,"Gosu":4,"Grace":0,"Gradle":0,"Grammatical Framework":1,"Graph Modeling Language":0,"GraphQL":0,"Graphviz (DOT)":0,"Groovy":242,"Groovy Server Pages":0,"Hack":9,"Haml":0,"Handlebars":2,"HAProxy":0,"Harbour":0,"Haxe":58,"HCL":56,"HiveQL":0,"HLSL":12,"HTML+Django":0,"HTML+ECR":0,"HTML+EEX":0,"HTML+ERB":0,"HTML+PHP":0,"HTML+Razor":0,"HTTP":0,"HXML":0,"Hy":1,"HyPhy":0,"IDL":2,"Idris":12,"IGOR Pro":0,"Inform 7":1,"INI":0,"Inno Setup":7,"Io":0,"Ioke":0,"IRC log":0,"Isabelle":3,"Isabelle ROOT":0,"J":1,"Jasmin":1,"Java Properties":0,"Java Server Pages":0,"JFlex":0,"Jison":0,"Jison Lex":0,"Jolie":0,"JSON":1,"JSON with Comments":0,"JSON5":0,"JSONiq":0,"JSONLD":0,"JSX":0,"Julia":138,"Jupyter Notebook":1545,"KiCad Layout":10,"KiCad Legacy Layout":0,"KiCad Schematic":0,"Kit":0,"Kotlin":895,"KRL":0,"LabVIEW":0,"Lasso":1,"Latte":0,"Lean":3,"Less":0,"Lex":3,"LFE":0,"LilyPond":1,"Limbo":0,"Linker Script":0,"Linux Kernel Module":0,"Liquid":4,"Literate Agda":0,"Literate CoffeeScript":0,"Literate Haskell":0,"LiveScript":17,"LLVM":12,"Logos":11,"Logtalk":0,"LOLCODE":0,"LookML":0,"LoomScript":1,"LSL":0,"M":3,"M4":5,"M4Sugar":0,"Makefile":246,"Mako":1,"Markdown":2,"Marko":0,"Mask":1,"Mathematica":18,"Maven POM":0,"Max":9,"MAXScript":0,"MediaWiki":0,"Mercury":4,"Meson":1,"Metal":1,"MiniD":0,"Mirah":1,"Modelica":1,"Modula-2":0,"Modula-3":0,"Module Management System":0,"Monkey":0,"Moocode":0,"MoonScript":6,"MQL4":1,"MQL5":2,"MTML":0,"MUF":0,"mupad":0,"Myghty":0,"NCL":0,"Nearley":0,"Nemerle":3,"nesC":2,"NetLinx":0,"NetLinx+ERB":0,"NetLogo":0,"NewLisp":1,"Nextflow":0,"Nginx":12,"Nim":37,"Ninja":0,"Nit":0,"Nix":23,"NL":0,"NSIS":8,"Nu":0,"NumPy":0,"ObjDump":0,"Objective-C++":68,"Objective-J":7,"OCaml":194,"Omgrofl":0,"ooc":1,"Opa":0,"Opal":0,"OpenCL":0,"OpenEdge ABL":19,"OpenRC runscript":0,"OpenSCAD":21,"OpenType Feature File":0,"Org":0,"Ox":0,"Oxygene":0,"Oz":1,"P4":2,"Pan":0,"Papyrus":0,"Parrot":0,"Parrot Assembly":0,"Parrot Internal Representation":0,"Pascal":103,"Pawn":0,"Pep8":0,"Perl 6":16,"Pic":0,"Pickle":0,"PicoLisp":0,"PigLatin":1,"Pike":0,"PLpgSQL":54,"PLSQL":14,"Pod":0,"Pod 6":0,"PogoScript":1,"Pony":4,"PostCSS":0,"PostScript":25,"POV-Ray SDL":2,"PowerBuilder":0,"PowerShell":366,"Processing":42,"Prolog":13,"Propeller Spin":2,"Protocol Buffer":10,"Public Key":0,"Pug":0,"Puppet":24,"Pure Data":5,"PureBasic":3,"PureScript":28,"Python console":0,"Python traceback":0,"q":2,"QMake":1,"QML":36,"Quake":0,"Racket":33,"Ragel":1,"RAML":6,"Rascal":1,"Raw token data":0,"RDoc":0,"REALbasic":1,"Reason":0,"Rebol":0,"Red":3,"Redcode":0,"Regular Expression":0,"Ren'Py":2,"RenderScript":0,"reStructuredText":0,"REXX":0,"RHTML":0,"Ring":1,"RMarkdown":0,"RobotFramework":0,"Roff":33,"Rouge":0,"RPC":2,"RPM Spec":0,"RUNOFF":0,"Rust":1175,"Sage":0,"SaltStack":7,"SAS":1,"Sass":0,"Scaml":0,"Scheme":52,"Scilab":0,"SCSS":0,"sed":3,"Self":1,"ShaderLab":34,"ShellSession":0,"Shen":2,"Slash":1,"Slice":0,"Slim":0,"Smali":10,"Smalltalk":10,"Smarty":32,"SMT":5,"Solidity":11,"SourcePawn":7,"SPARQL":0,"Spline Font Database":0,"SQF":5,"SQL":4,"SQLPL":9,"Squirrel":0,"SRecode Template":2,"Stan":1,"Standard ML":22,"Stata":2,"STON":0,"Stylus":0,"SubRip Text":0,"SugarSS":0,"SuperCollider":3,"SVG":0,"SystemVerilog":11,"Tcl":17,"Tcsh":0,"Tea":0,"Terra":2,"Text":0,"Textile":0,"Thrift":3,"TI Program":0,"TLA":4,"TOML":0,"Turing":0,"Turtle":0,"Twig":0,"TXL":0,"Type Language":0,"TypeScript":2350,"Unified Parallel C":0,"Unity3D Asset":0,"Unix Assembly":0,"Uno":1,"UnrealScript":0,"UrWeb":0,"Vala":54,"VCL":7,"Verilog":37,"VHDL":20,"Visual Basic":56,"Volt":0,"Vue":718,"Wavefront Material":0,"Wavefront Object":0,"wdl":0,"Web Ontology Language":1,"WebAssembly":21,"WebIDL":2,"Windows Registry Entries":0,"wisp":1,"World of Warcraft Addon Data":0,"X BitMap":0,"X Font Directory Index":0,"X PixMap":0,"X10":0,"xBase":0,"XC":0,"XCompose":0,"XML":3,"Xojo":0,"XPages":0,"XProc":0,"XQuery":0,"XS":0,"XSLT":42,"Xtend":1,"Yacc":5,"YAML":0,"YANG":0,"YARA":8,"YASnippet":1,"Zephir":0,"Zimpl":0};
let children=[];

for (let key in data){
  let obj={};
  obj.name=key
  obj.size=data[key]
  children.push(obj)
};
let nodeData={'name':'allLanguges', 
              "children":children}
   // Create primary <g> element
    var g = d3.select('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // Data strucure
    var partition = d3.partition()
        .size([2*Math.PI, radius]);

    // Find data root
    var root = d3.hierarchy(nodeData)
        .sum((d)=>d.size);

    // Size arcs
    partition(root);
    var arc = d3.arc()
        .startAngle((d)=> d.x0 )
        .endAngle((d)=>  d.x1 )
        .innerRadius(function (d) { return d.y0 })
        .outerRadius(function (d) { return d.y1 });

    // Put it all together
    g.selectAll('path')
        .data(root.descendants())
        .enter().append('path')
        .attr("display", function (d) { return d.depth ? null : "none"; })
        .attr("d", arc)
        .style('stroke', 'black')
        .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });
        

   
    // Create primary <g> element
    var g = d3.select('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // Data strucure
    var partition = d3.partition()
        .size([2*Math.PI, radius]);

    // Find data root
    var root = d3.hierarchy(nodeData)
        .sum( (d)=>d.size);

    // Size arcs
    partition(root);
    var arc = d3.arc()
        .startAngle((d)=>  d.x0 )
        .endAngle((d)=> d.x1 )
        .innerRadius((d) => d.y0 )
        .outerRadius( (d) => d.y1);

    // Put it all together
    g.selectAll('path')
        .data(root.descendants())
        .enter().append('path')
        .attr("display", function (d) { return d.depth ? null : "none"; })
        .attr("d", arc)
        .style('stroke', 'black')
        .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });
        </script>
</body>
