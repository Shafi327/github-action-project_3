import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const query = req.query;
    return {
      search: query?.search || '',
      page: Number(query?.page || 1),
      limit: Number(query?.limit || 10),
    };
  },
);
