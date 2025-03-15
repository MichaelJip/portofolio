import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ResumeArchiveData } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ArchivePage() {
  return (
    <div className="min-h-screen w-full bg-[#181c36] p-6 md:p-24 overflow-auto">
      <p className="flex text-[#63b5fa] font-semibold text-xl">
        <Link href={"/"} replace>
          <ArrowLeft className="mx-1 mt-0.5 text-[#63b5fa]" size={18} />
        </Link>
        View Full Project Archive
      </p>
      <p className="text-3xl text-[#f0f6ff] font-bold my-2">All Project</p>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-white font-bold">Year</TableHead>
              <TableHead className="text-white font-bold">Project</TableHead>
              <TableHead className="text-white font-bold hidden md:hidden lg:table-cell">
                Made at
              </TableHead>
              <TableHead className="text-white font-bold hidden md:hidden lg:table-cell">
                Built with
              </TableHead>
              <TableHead className="text-white font-bold hidden md:table-cell">
                Link
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ResumeArchiveData.map((val, index) => (
              <TableRow key={index}>
                <TableCell className="text-[#dde4ee] font-bold">
                  {val.year}
                </TableCell>
                <TableCell>
                  <span className="hidden text-white md:block font-bold">
                    {val.project}
                  </span>
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block md:hidden font-bold text-white hover:text-[#4a90e2]"
                  >
                    {val.project}
                  </a>
                </TableCell>

                <TableCell className="text-[#dde4ee] font-bold hidden md:hidden lg:table-cell">
                  {val.madeAt}
                </TableCell>
                <TableCell className="text-white font-bold hidden md:hidden lg:table-cell">
                  {val.buildWith.map((val, i) => (
                    <Badge
                      key={val + i}
                      variant={"secondary"}
                      className={`mt-1 bg-[#63b5fa] hover:bg-[#63b5fa] ${
                        i !== 0 ? "mx-2" : ""
                      }`}
                    >
                      {val}
                    </Badge>
                  ))}
                </TableCell>

                <TableCell className="text-white font-bold hidden md:table-cell">
                  <a
                    href={
                      val.link
                        ? val.link.startsWith("http")
                          ? val.link
                          : `https://${val.link}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#dde4ee] hover:text-[#4a90e2]"
                  >
                    {val.title !== "" ? val.title : val.project}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
