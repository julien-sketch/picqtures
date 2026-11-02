import { permanentRedirect } from "next/navigation";
import { FARMASI_SECTION } from "../_lib/topic-links";

export default function FarmasiPage() {
  permanentRedirect(FARMASI_SECTION);
}
