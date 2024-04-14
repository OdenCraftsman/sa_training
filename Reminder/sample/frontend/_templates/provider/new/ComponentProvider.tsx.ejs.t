---
to: <%= abs_path %>/<%= provider_name %>.tsx
---

type RenderProps = {};

type <%= provider_name %>Props = {
  render: React.FC<RenderProps>;
}

export const <%= provider_name %>:<%- type_annotate %> = ({ render }) => {
  return render({});
}
