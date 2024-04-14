---
to: <%= abs_path %>/<%= component_name %>.tsx
---
<% if (have_props) { -%>

type <%= component_name %>Props = {};

<% } -%>

export const <%= component_name %>: <%- type_annotate %> = <%= props %> => {
  return <></>;
}
