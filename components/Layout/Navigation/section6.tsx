import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { ChartPieIcon } from "@heroicons/react/outline";
import { ChartPieIcon as ChartPieIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section6({ active = false }: { active: boolean }) {
  return (
    <Link href="/section6" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <ChartPieIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <ChartPieIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 6</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 6</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section6;
