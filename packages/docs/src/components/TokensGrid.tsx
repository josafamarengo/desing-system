import React from "react";
import "../styles/tokens-grid.css"

interface TokensGridProps {
    tokens: Record<string, string>;
    hasRem?: boolean;
    isSpacings?: boolean;
    isFontSizes?: boolean;
    isFontWeights?: boolean;
    isLetterSpacings?: boolean;
    isFontFamilies?: boolean;
    rounded?: boolean;
}

export function TokensGrid({ tokens, hasRem, isSpacings, isFontFamilies, isFontWeights, isFontSizes, isLetterSpacings, rounded }: TokensGridProps) {
    return (
      <table className="tokens-grid">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            {hasRem && <th>Pixels</th>}
            {isSpacings && <th>Example</th>}
            {isFontSizes && <th>Example</th>}
            {isLetterSpacings && <th>Example</th>}
            {rounded && <th>Example</th>}
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([name, value]) => (
            <tr key={name}>
              <td>{name}</td>
              <td
              style={{
                fontFamily: isFontFamilies ? value : 'inherit',
                fontWeight: isFontWeights ? value : 700,
              }}
              >{value}</td>
              {hasRem && <td>{Number(value.replace("rem", "")) * 16}px</td>}
              {isSpacings && (
                <td>
                  <div
                    style={{
                      width: value,
                      height: "1rem",
                      backgroundColor: "#22d3ee",
                    }}
                  ></div>
                </td>
              )}
              {isFontSizes && (
                <td>
                  <div
                    style={{
                      fontSize: value,
                      fontFamily: "Inter",
                      fontWeight: 700,
                      color: "#22d3ee",
                    }}
                  >
                    Aa
                  </div>
                </td>
              )}
              {isLetterSpacings && (
                <td>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontFamily: "Inter",
                      fontWeight: 700,
                      letterSpacing: value,
                      color: "#22d3ee",
                    }}
                  >
                    Lorem ipsum dolor sit amet
                  </div>
                </td>
              )}
              {rounded && (
                <td>
                  <div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      backgroundColor: "#22d3ee",
                      borderRadius: value,
                    }}
                  ></div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
}
