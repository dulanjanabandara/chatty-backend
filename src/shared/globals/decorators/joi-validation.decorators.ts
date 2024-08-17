/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { ObjectSchema } from 'joi';
import { JoiRequestValidationError } from '@global/helpers/error-handler';

type IJoiDecorator = (target: any, key: string, descriptor: PropertyDescriptor) => void;
