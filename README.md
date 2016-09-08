<h1>jq-make-sticky!</h1>
<h3>What can you make sticky with jq-make-sticky?</h3>
<ul>
  <li>Nav Bars</li>
  <li>Table Headers</li>
  <li>Notifications</li>
  <li>Advertisements</li>
  <li>If you can select it with jQuery, you can make it sticky!</li>
</ul>

<h3>What makes jq-make-sticky cool?</h3>
<p>jq-make-sticky will automatically calculate the position of where your sticky elements will go. This means that you can make several things on the page sticky, and they will stack in the correct position based on how many sticky elements are currently active - no more manually hacking your way through this! jq-make-sticky also uses a technique that does not change document flow when you make things stick/unstick.</p>

<h2>Syntax</H2>
`$("elements").makeSticky([options]);`

<h2>Options</h2>
<table>
  <tr>
    <th>Option Name</th>
    <th>Valid Values</th>
    <th>Unit-less Fallback</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>left</td>
    <td>"#vw", "#px", "#%", "#em", "#rem"</td>
    <td># + "px"</td>
    <td>0px</td>
  </tr>
  <tr>
    <td>margin</td>
    <td>valid CSS margin values only! *</td>
    <td>NONE</td>
    <td>0 auto</td>
  </tr>
  <tr>
    <td>right</td>
    <td>"#vw", "#px", "#%", "#em", "#rem"</td>
    <td># + "px"</td>
    <td>0px</td>
  </tr>
  <tr>
    <td>width</td>
    <td>"#vw", "#px", "#%", "#em", "#rem", "match" **</td>
    <td># + "%"</td>
    <td>Calc(100% - 20px) ***</td>
  </tr>
  <tr>
    <td colspan="4">
      * i.e. "# # # #", "# #"...<br>
      ** match the current width of the element in px<br>
      *** -20px to account for scrollbar width
    </td>
  <tr>
</table>
  
<h2>Examples</h2>
- ###Default Settings
  `$("#myNav").makeSticky();`

- ###Maintain Element Width
  `$(".make-me-sticky").makeSticky({ width: "match" });`


