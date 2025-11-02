import { Badge } from "@/components/ui/badge"
import type { Technology } from '@/hero/interfaces/Project.interface'

interface Props {
    technology: Technology
}


export const ItemTechnologie = ({ technology }: Props) => {

    const {icon: Icon} = technology

    return (
        <Badge key={technology.name} variant="secondary" className="text-xs">
            <Icon className='mr-1' />
            {technology.name}
        </Badge>
    )
}
