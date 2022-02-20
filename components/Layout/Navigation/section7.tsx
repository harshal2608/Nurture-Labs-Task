import Link from "next/link";
import { RowFixed } from "../../../styles/Theme/components";
import { TYPEGREY, TYPEWHITE } from "../../../styles/Theme/text";
import { ChartBarIcon } from "@heroicons/react/outline";
import { ChartBarIcon as ChartBarIconSolid } from "@heroicons/react/solid";
import { ItemWrapper, ImageWrapper } from "./";

function section7({ active = false }: { active: boolean }) {
  return (
    <Link href="/section7" passHref>
      <ItemWrapper active={active}>
        <RowFixed gap="20px">
          <ImageWrapper>
            {active ? (
              <ChartBarIconSolid color={active ? "#FFFFFF" : "#808191"} />
            ) : (
              <ChartBarIcon color={active ? "#FFFFFF" : "#808191"} />
            )}
          </ImageWrapper>
          {active ? (
            <TYPEWHITE>Section 7</TYPEWHITE>
          ) : (
            <TYPEGREY>Section 7</TYPEGREY>
          )}
        </RowFixed>
      </ItemWrapper>
    </Link>
  );
}
export default section7;
