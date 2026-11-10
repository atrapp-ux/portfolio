import { tools } from "@content/tools";
import { publicAsset } from "@/lib/public-asset";

export function Tools() {
  return (
    <section className="tools-section" aria-label="Tools">
      <ul className="tools-bar">
        {tools.map((tool) => (
          <li className="tool" key={tool.label}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={publicAsset(tool.icon)} alt="" width={tool.iconWidth} height={tool.iconHeight} />
            <p>{tool.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
